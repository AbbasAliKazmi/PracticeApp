import { url } from "@/app/constants";
import Link from "next/link"

interface IBook{
    id: number,
    name: string ,
    available: boolean,
    type: string
}

const BooksPage =async() =>{

   const response = await fetch(`${url}/books`)
   const books:IBook[] = await response.json();

  console.log(books);

   return (
       <div>
          <h1>Todos</h1>
           <h1>{
            books.map((book) => {
                return (
                    <Link href={`/books/${book.id}`}>
                        <div key={book.id}>
                            <h2>{book.id} {book.name}</h2>
                        </div>
                    </Link>    
                );
            })
           }</h1>
       </div>
   )
}

export default BooksPage;

