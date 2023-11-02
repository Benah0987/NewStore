import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

function Product() {
  const { products } = useContext(ProductContext); // Assuming you have 'products' in your ProductContext

  return (
    <div className='container my-5'>
      <div className='text-center'>
        <h2 className='fw-bold'>Products</h2>
        <p>Explore our products</p>
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-4 mb-3 mr-3 px-3">
              <div className='border bg-light overflow-hidden'>
                <img src={product.image} className='img-fluid' alt='Product Image' />
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Available Quantity: {product.quantity}</p>
                <Link to={`products/${product.id}`} className="btn btn-danger w-100">
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products available at the moment</p>
        )}
      </div>
    </div>
  );
}

export default Product;
