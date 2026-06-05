import {useState} from 'react';
 function Name(){
    const [name, setName] = useState('?');
    return(
        <div className='bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center gap-6'>
            <h1 className='text-6xl font-bold '>name:{name}</h1>

            <div className="flex gap-5">
                <button onClick={() => setName('Ali')} className='bg-yellow-200 text-gray-900 rounded-full p-4 m-4 '>name1</button>

                <button onClick={() => setName('Ahmed')} className='bg-yellow-200 text-gray-900 rounded-full p-4 m-4 '>name2</button>
            </div>
        </div>
    )
 }
 export default Name;