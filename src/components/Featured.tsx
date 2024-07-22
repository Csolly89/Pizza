import { featuredProducts } from '@@/app/data';
import Image from 'next/image';
import React from 'react';

function Featured() {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* Wrapper */}
            <div className='w-max flex'>
                {/* single items */}
                {featuredProducts.map(item => (
                    <div key={item.id} className='w-screen md:w-[50vw] xl:w-[33vw] xl:h-[90vh] h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300'>
                        {/* Image */}
                        {item.img && (
                            <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                                <Image className='object-contain' src={item.img} alt="" fill />
                            </div>
                        )}
                        {/* Text container */}
                        <div className='flex-1 flex flex-col gap-4 items-center text-center justify-center'>
                            <h1 className='text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase'>{item.title}</h1>
                            <p className='p-4'>{item.desc}</p>
                            <span className='text-xl font-bold'>${item.price}</span>
                            <button className='bg-red-500 text-white p-2 rounded-md '>Add to Cart</button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Featured;