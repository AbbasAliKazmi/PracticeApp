import { Metadata } from "next";

type Props= {
  params : { 
    productID : string 
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => { 
  const title = await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`Iphone ${params.productID}`);
    }, 100);
  });
  return {
    title : `Product ${title}`,
  };
};

export default function ProductDetails( { params } : Props){ 
   return (
      <h1>Detail About Product {params.productID} </h1>
   );
}

  