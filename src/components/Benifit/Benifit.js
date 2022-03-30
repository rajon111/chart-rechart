import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benifit = ({ben}) => {
    return (
        <p className='flex items-center gap-1'>
                <CheckCircleIcon className='w-4 h-4 text-green-500'></CheckCircleIcon>
                {ben}
               
        </p>
        
    );
};

export default Benifit;