import Link from 'next/link';



interface ICats {
    id: string;
    name: string;
    age: number;
    breed: string;
    available : boolean;
}

const CatsPage = async () => {

    export const url = "https://cat-fact.herokuapp.com"
    const response = await fetch('${Apiurl}/cats');
    // response.status
    const cats: ICats[] = await response.json();

    console.log(cats);

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-950'>Cats</h1>
            <div>
                {cats.map((cat) => {
                    return (
                        <Link key={cat.id} href={`/cats/${cat.id}`}>
                            <div key={cat.id}>
                                <h2 className='text-xl font-semibold text-gray-950'>{cat.name}</h2>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )};
