import Image from 'next/image';
import React from 'react';

// import CountDown from './CountDown';
import dynamic from 'next/dynamic';

function Offer() {
    // dynamic import to disable pre-rendered component that needs to be rendered on client side
    const NoSSR = dynamic(() => import('../components/CountDown'), {ssr: false})
    
    return (
        <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
            {/* Text container */}
            <div className='flex-1 flex flex-col justify-center text-center items-center gap-8 p-6'>
                <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fries</h1>
                <p className='text-white xl:text-xl'>Progressively simplify effective e-toilers and process-centtric methods of empowerment. Quickly pontificate parallel.</p>
                <NoSSR />
                <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
            </div>
            {/* Image container */}
            <div className='relative flex-1 w-full md:h-full'>
                <Image src="/offerProduct.png" alt='' fill className='object-contain'/>
            </div>
        </div>
    );
}

export default Offer;