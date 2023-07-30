import React from "react";
import { Result, counterResult } from "./provider";

const Comp1 = () => {
    const { count, setCount } = counterResult()
    return (
        <div style={{ width: "200px", height: "200px", backgroundColor: "yellow" }} onClick={() => {
            setCount(count + 1)
        }}>
            {count}
        </div>
    )
}
export default Comp1




