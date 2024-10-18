import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';

const View = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (sessionStorage.getItem("allRecipes")) {
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"));
      setRecipe(allRecipes.find(item => item.id == id)); 
    }
  }, [id]);

  return (
    <>
      <Header />
      <div className="container d-flex align-items-center justify-content-center mt-5" style={{ minHeight: '90vh' }}>
        <div className="row w-75">
          <div className="col-md-6">
            <img className="img-fluid" style={{ height: '400px' }} src={recipe?.image} alt="" />
          </div>
          <div className="col-md-6">
            <h5>Recipe ID: {recipe?.id}</h5>
            <h1 className="display-4">{recipe?.name}</h1>
            <p><strong>Ingredients:</strong> {recipe?.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe?.instructions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
