import { notFound } from "next/navigation"
import { parse } from "path";

export default function ReviewDetail( { 
    params,
} : { 
    params : { 
        productID : string;
        reviewID : string;
     };
    }) {
      if (parseInt(params.reviewID) < 1000) {
          notFound();
      }
    return (
      <h1>Review {params.reviewID } for product {params.productID} </h1>
    )
  };