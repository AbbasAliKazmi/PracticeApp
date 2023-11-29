export default function ReviewDetail( { 
    params,
} : { 
    params : { 
        productID : string;
        reviewID : string;
     };
    }) {
    return (
      <h1>Review {params.reviewID } for product {params.productID} </h1>
    )
  };