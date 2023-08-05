import { useState } from "react";

import { Pool } from './components/Pool';
import { Buttons } from "./components/Buttons";


export function App() {

    const [count, setCount] = useState(0);


    const addWater = () => {

        let startTime = Date.now();
        const interval = setInterval(() => {
            setCount(sec => sec + 1);
            if (Date.now() - startTime > 10000) clearInterval(interval);
        }, 1000);
    }

    const removeWater = () => {

        let startTime = Date.now();
        const interval = setInterval(() => {
            setCount(sec => sec - 1);
            if (Date.now() - startTime > 10000) clearInterval(interval);
        }, 1000);
    }


    return (
        <div className=" text-center">
            <span className=" text-blue-800 text-5xl p-2 m-2">WATERPOOL</span>
            <Pool count={count} />
            <Buttons addWater={addWater} removeWater={removeWater} />
            <span className=" bg-yellow-600 p-2 m-2 text-white border-4">Time: {count}</span>
        </div>
    )
}
