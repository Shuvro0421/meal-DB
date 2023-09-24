import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Beef from '../Beef/Beef';

const Beefs = () => {
    const beefs = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-3 m-3 p-3'>
            {
                beefs.meals.map(beef => <Beef beef={beef}></Beef>)
            }
        </div>
    );
};

export default Beefs;