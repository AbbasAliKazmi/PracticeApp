import React from "react";
import Todo from "./FirstBlog/page";

const myTodoItems = [
    {
        id: 1,
        title: "Abbas eat food",
    },
    {
        id: 2,
        title: "Abbas sleep",
    },
    {
        id: 3,
        title: "Abbas play",
    }    ,
    {
        id: 4,
        title: "Abbas sing",
    } 
  ]

export default function Blog(){
    return(
        <div>
            <Todo items={myTodoItems} />
        </div>    
    )
}
