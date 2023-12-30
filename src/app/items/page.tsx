"use client";
import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
}

async function fetchData(setProduct) {
    let data;
    try {
        data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        setProduct(data.products);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default function Items() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData(setProduct);
    }, []);

    return (
        <div>
            <h1>Items</h1>
            {product.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <h3>{item.description}</h3>
            </div>    
            ))}
        </div>
    );
}
