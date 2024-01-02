import { url } from "@/app/constants";

interface IProps{
    params: {
        id: string
    }
}

interface IBook{
    id: number,
    name: string ,
    available: boolean,
    type: string,
    author: string,
    price: number,
    'current-stock': number
}
const BooksPage = async({params}: IProps) => {
    const response = await fetch(`${url}/books/${params.id}`);
    const book:IBook = await response.json();
  return (
      <div>
          <h1>Books Deails</h1>
          <h1>Books id is {params.id}</h1>
          <h1>Books name is {book.name}</h1>
          <h1>Books author is {book.author}</h1>
          <h1>Books price is {book.price}</h1>
          <h1>Current Stock{book["current-stock"]}</h1>
      </div>
  )


}

export default BooksPage;