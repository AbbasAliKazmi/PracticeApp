// import React, { useState } from "react";
// import Todo from "./FirstBlog/page";
// import Counter from "../components/counter/page";

// const myTodoItems = [
//     {
//         id: 1,
//         title: "Abbas eat food",
//     },
//     {
//         id: 2,
//         title: "Abbas sleep",
//     },
//     {
//         id: 3,
//         title: "Abbas play",
//     }    ,
//     {
//         id: 4,
//         title: "Abbas sing",
//     } 
//   ]

// export default function Blog(){
//     const [ state, setState ] = useState<boolean>(true)
//     return(
//         <div>
//             <Todo items={myTodoItems} />
//             <button onClick={e => setState(!state)}>
//                Toggle
//             </button>
//             {state ? <Counter />: ""}
//         </div>    
//     )
// }
