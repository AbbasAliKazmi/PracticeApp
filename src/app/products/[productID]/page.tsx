export default function ProductDetail( { params } : { 
    params : { productID : string }}
    ) {
    return (
      <h1>Detail About Product {params.productID} </h1>
    )
  };
  