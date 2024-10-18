import React, { useEffect, useState } from 'react';
import Header from '../components/Header';         
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes } from '../redux/slice/recipeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const totalPages = Math.ceil(allRecipes?.length / recipesPerPage);
  const currentPageLastRecipeIndex = currentPage * recipesPerPage;
  const currentPageStartRecipeIndex = currentPageLastRecipeIndex - recipesPerPage;
  const visibleRecipeCards = allRecipes?.slice(currentPageStartRecipeIndex, currentPageLastRecipeIndex);

  useEffect(() => {
    dispatch(fetchAllRecipes()); 
  }, [dispatch]);

  const navigateToNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Header insideHome={true} />
      <div className='container mt-5'>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <img width="90" height="90" src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" className='me-2' alt="Loading..." />
            Loading...
          </div>
        ) : (
          <>
            <div className="row g-4 mt-5">
              {allRecipes.length > 0 ? visibleRecipeCards?.map(recipe => (
                <div key={recipe?.id} className="col-md-3">
                  <div className="card h-100 shadow-sm">
                    <img className="card-img-top" style={{ height: '300px' }} src={recipe?.image} alt="" />
                    <div className="card-body text-center">
                      <h5 className="card-title">{recipe?.name}</h5>
                      <Link className='btn btn-warning' to={`/${recipe?.id}/view`}>View More</Link>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="alert alert-danger text-center">
                  Recipe Not Found!
                </div>
              )}
            </div>
            {/* Pagination */}
            <div className="d-flex justify-content-center align-items-center mt-4">
              <button className='btn btn-outline-secondary me-2' onClick={navigateToPrevPage} disabled={currentPage === 1}>
                <i className='fas fa-backward'></i>
              </button>
              <span className="fw-bold">{currentPage} of {totalPages}</span>
              <button className='btn btn-outline-secondary ms-2' onClick={navigateToNextPage} disabled={currentPage === totalPages}>
                <i className='fas fa-forward'></i>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
