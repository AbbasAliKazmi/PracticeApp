import {url} from '@app/constants/url';

interface Iprops{
    params: {
        id: string;
    }
}

interface ICat {
    id: string;
    name: string;
    age: number;
    breed: string;
    available: boolean;
}

const CatsPPage = ({params}: Iprops) => {

    const response = await fetch('${url}/cats/${params.id}');
    const cat : ICat = await response.json();

    return (
        <div>
            <h1 className='text-3xl font-semibold text-gray-950'>Cats</h1>
            <div>
                    <div key={cat.id}>
                        <div className='text-xl font-semibold text-gray-950'>{cat.name}</div>
                        <div className='text-lg font-semibold text-gray-950'>{cat.age}</div>
                        <div className='text-lg font-semibold text-gray-950'>{cat.breed}</div>
                        <div className='text-lg font-semibold text-gray-950'>{cat.available}</div>
                    </div>
            </div>
        </div>
    )

