import { useEffect, useState } from "react"
import { Water } from "./Water";


export function Pool({ count }) {

    const [arr, setArr] = useState([]);

    useEffect(() => {

        let newArr = [];
        for (let i = 0; i < count; i++) {
            newArr.push(i);
        }
        setArr(newArr);

    }, [count])


    return (
        <div className=" Pool">
            {
                arr.map(elem => <Water key={elem} />)
            }
        </div>
    )
}
