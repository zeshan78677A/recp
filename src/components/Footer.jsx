import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-success text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-6">
            <h5>Recipe List</h5>
            <p>Explore a wide range of delicious recipes, curated just for you!</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-success me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-success me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-success me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" className="text-success">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-0">&copy; 2024 Recipe App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
