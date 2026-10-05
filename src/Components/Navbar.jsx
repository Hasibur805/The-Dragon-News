import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';


const Navbar = () => {
    return (
        <div className='flex justify-around my-5 items-center'>
            <div></div>
            <div className='flex gap-4 text-accent'>
                <NavLink className="px-3 py-2" to={'/'}>Home</NavLink>
                <NavLink className="px-3 py-2" to={'/About'}>About</NavLink>
                <NavLink className="px-3 py-2" to={'/career'}>career</NavLink>
            </div>
            <div className='flex gap-5'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;