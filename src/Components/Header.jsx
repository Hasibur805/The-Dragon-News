import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <img className='w-xl mb-4' src={logo} alt="" />
            <p className='font-semibold text-accent'>Journalism Without Fear or Favour</p>
            <div  className='font-semibold'>
                {
                    format(new Date(), "EEEE, MMMM dd, yyyy ")
                }
            </div>

        </div>
    );
};

export default Header;