"use client";

import React,{ useState , useEffect } from "react";
import "./style.css";
const Counter: React.FC = (props) => {
    const [value , setValue ] = useState(0);

    useEffect(() => {
        console.log("Component Did Mount");

        return function () {
            console.log("Component is Unmount")
        }
    },[])

    useEffect(() => {
        console.log("User Updated data")
    },[value])

    console.log("Re-render new value is ",value)

    const handleIncrement = () => {
        setValue(value + 1);
    }
    const handleDecrement = () => {
        if (value === 0) return;
        setValue(value - 1);
    }

    return(
        <div className="counter-container">
            <h1>{value}</h1>
            <button onClick={handleIncrement} style={{background:"lightgreen"}}>Increment</button>
            <button onClick={handleDecrement} style={{background:"tomato"}}>Decrement</button>
        </div>
    )
}

export default Counter;