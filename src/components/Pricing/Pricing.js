import React from 'react';
import PricingOption from '../PricingOption.js/PricingOption';

const Pricing = () => {
 const pricingOption =[
     {id:1,name:'abc',price:0, benefits:[
         'lifetime free', 'unlimited project'
     ]},
     {id:2,name:'def',price:90 , benefits:[
        'lifetime  with support', 'unlimited project with guideline'
    ] },
     {id:3,name:'cdf',price:99.99 , benefits:[
        'Permium support', 'unlimited project'
    ]},
 ]
    return (
        <div className='bg-indigo-200  p-4 mt-8'>
            <h1 className='text-5xl text-white'>Pricing</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam quibusdam ipsam odit culpa dolorem dolores obcaecati sint corrupti laudantium?</p>
            <div className='grid md:grid-cols-3 gap-4 mt-7'>
                {
                    pricingOption.map(option => <PricingOption key={option.map} option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;