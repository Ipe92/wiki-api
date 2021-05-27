import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
    const [data, setData] = useState();
    const [hakuTemp, setHakuTemp] = useState();
    const [haku, setHaku] = useState();
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
            <input type="text" placeholder="Haku" onChange={(event) => setHakuTemp(event.target.value)} />
            <button onClick={() => setHaku(hakuTemp)}>Hae</button>
            {data?.[0]?.title && <h1>{data[0].title}</h1>}
            {data?.[0]?.extract && <p>{data[0].extract}</p>}
        </div>
    );
}
export default App;
