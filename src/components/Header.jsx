import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRecipe } from '../redux/slice/recipeSlice';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();

  return (
    <nav className='navbar navbar-expand-lg navbar-success bg-success fixed-top'>
      <div className="container">
        <Link className='navbar-brand text-black fw-bold' to={'/'}>
          <i className="fas fa-utensils me-2"></i>Recipe List
        </Link>
        {insideHome && (
          <form className="d-flex ms-auto">
            <input
              onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))}
              className="form-control me-2"
              type="search"
              placeholder="Search Recipes"
              aria-label="Search"
            />
          </form>
        )}
      </div>
    </nav>
  );
};

export default Header;
