import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductContext } from '../context/ProductContext'; // Updated import to ProductContext

export default function SingleProduct() {
  const nav = useNavigate();
  const { id } = useParams();

  const { GetSingleProduct, singleProduct, DeleteProduct } = useContext(ProductContext); // Utilize ProductContext

  useEffect(() => {
    GetSingleProduct(id);
  }, [GetSingleProduct, id]);

  const handleDelete = () => {
    DeleteProduct(id);
  };

  return (
    <div className='singleProduct container'>
      <h1>{singleProduct && singleProduct.name}</h1>
      <div className='row'>
        <div className='col-6 card bg-light me-2'>
          <img src={singleProduct && singleProduct.image} className='img-fluid' alt='Product Image' />
          <h5>{singleProduct && singleProduct.name}</h5>
          <p>{singleProduct && singleProduct.description}</p>
          <p>Price: ${singleProduct && singleProduct.price}</p>
          <p>Available Quantity: {singleProduct && singleProduct.quantity}</p>
        </div>
        <div className='col-4 p-3 card bg-light'>
          <button onClick={handleDelete} type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
