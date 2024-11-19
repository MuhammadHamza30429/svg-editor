import React from 'react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const designSVG = "path-to-your-svg-file.svg"; // Example, path to SVG logo

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {/* When clicked, will redirect to the editor page */}
        <Link to={{ pathname: '/editor', state: { designSVG } }}>
          <button>Customize T-Shirt</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
