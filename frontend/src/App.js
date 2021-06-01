import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./App.css";

function App() {
    const [data, setData] = useState();
    const [haku, setHaku] = useState();
    const inputRef = useRef(null);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/wiki?haku=${haku}`)
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [haku]);
    console.log({ haku });
    return (
        <div className="App">
            <input type="text" placeholder="Haku" ref={inputRef} />
            <button onClick={() => setHaku(inputRef.current.value)}>Hae</button>
            {data?.[0]?.title && <h1>{data[0].title}</h1>}
            {data?.[0]?.thumbnail?.source && <img src={data?.[0]?.thumbnail?.source} />}
            {data?.[0]?.extract && <p>{data[0].extract}</p>}
        </div>
    );
}
export default App;
