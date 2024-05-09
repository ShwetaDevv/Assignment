import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-2xl font-bold mb-4'>Fetch Data from API in React with Axios</h1>
                <table className='w-full border-collapse border border-gray-800'>
                    <thead>
                        <tr className='bg-gray-200'>
                            <th className='border border-gray-800 p-2'>ID</th>
                            <th className='border border-gray-800 p-2'>Name</th>
                            <th className='border border-gray-800 p-2'>Email</th>
                            <th className='border border-gray-800 p-2'>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className='border border-gray-800 p-2'>{user.id}</td>
                                <td className='border border-gray-800 p-2'>{user.name}</td>
                                <td className='border border-gray-800 p-2'>{user.email}</td>
                                <td className='border border-gray-800 p-2'>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FetchData;
