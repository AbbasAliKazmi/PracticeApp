import React from 'react';

interface FirstBlog {
  name: string;
  message: string;
}




export default function FirstBlog(props: Readonly<FirstBlog>) {
  return (
    <div>
      <h1>Hello,First Blog {props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
}
  

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))




