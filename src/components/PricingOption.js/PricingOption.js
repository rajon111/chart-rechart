import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';


const PricingOption = ({option}) => {
    const {name, price,benefits} = option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
            <h3 className='text-2xl text-left'>Benefits: </h3>
                {
                    benefits.map(ben => <Benifit ben={ben}></Benifit>)
                }
                
                

            </div>
            <button className='bg-green-500 w-full py-2 rounded flex gap-2 justify-center text-white hover:text-gray-500'>Buy Now <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon> </button>
        </div>
    );
};

export default PricingOption;