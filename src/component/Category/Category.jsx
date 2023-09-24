import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Category = ({category}) => {
    const {strCategory} = category;
    return (
        <div>
            <NavLink to={`/categories/${strCategory}`}>{strCategory}</NavLink>
        </div>
    );
};

export default Category;