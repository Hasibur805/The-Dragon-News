import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json')
.then(res => res.json())

const AllCategories = () => {
    const categories = use(categoriesPromise)
    return (
        <div>
            <h2 className='font-semibold mb-5'>All categories {categories.length}</h2>
            <div className='flex flex-col gap-4'>
                {
                    categories.map((category) => {
                       return <NavLink 
                       key={category.id} className={'btn bg-base-100 border-0'}
                       to={`/category/${category.id}`}>{category.name}</NavLink>
                    } )
                }
            </div>
            
        </div>
    );
};

export default AllCategories;