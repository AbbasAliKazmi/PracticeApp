"use client";

import { useState } from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>About Page</h1>
      <div>
        <button style={{
          padding: '8px 16px',         // Equivalent to px-4 py-2
          fontWeight: 'bold',  
          fontSize: "50px" ,        // Equivalent to font-bold
          color: '#fff',                // Equivalent to text-white
          backgroundColor: '#1e40af',  // Equivalent to bg-blue-500
          borderRadius: '0.375rem',     // Equivalent to rounded
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
          onClick={() => {
            setCount(count => count + 1);
          }}>{count}</button>
        <button style={{
          padding: '8px 16px',         // Equivalent to px-4 py-2
          fontWeight: 'bold',  
          fontSize: "50px" ,        // Equivalent to font-bold
          color: '#fff',                // Equivalent to text-white
          backgroundColor: '#c02727',  // Equivalent to bg-blue-500
          borderRadius: '0.375rem',     // Equivalent to rounded
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          marginLeft: '50px'           // Fix: Correctly use camel case for marginLeft property
        }}
          onClick={e => alert("Hello")}>
          Click Me
        </button>
      </div>
    </div>
  );
};