import React from 'react';
import Swimming from '../../assets/swimming.png'
import classRoom from '../../assets/class.png'
import playGround from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='mt-8 bg-base-200 p-3 '>
           <h2 className='text-xl font-semibold'>Qzone </h2>
           <div className='w-full'>
            <img className='w-full ' src={Swimming} alt="" />
            <img className='w-full ' src={classRoom} alt="" />
            <img className='w-full ' src={playGround} alt="" />
           </div>
        </div>
    );
};

export default QZone;