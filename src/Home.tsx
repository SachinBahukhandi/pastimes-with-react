import React from 'react';

export default function Home() {

    return <div className='container w-screen bg-indigo-500 max-w-full max-h-full'>
        <div className="flex flex-row max-h-full min-h-screen">
            <div className="basis-1/2 bg-red-200"></div>
            <div className="basis-1/2 bg-orange-200"></div>
            <div className="basis-1/2 bg-gray-200"></div>
        </div>
    </div>;
}