import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/products")
    fetch("http://127.0.0.1:8000/api/product")
      .then(response => response.json())
      .then(product => setProducts(product));
  }, []);

  return (

    <div> 
          <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Color</th>
            <th>Category</th>
            <th>Material</th>
            <th>Expiry Date</th>
            <th>Origin</th>
            <th>Description</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td><img src={product.image} style={{width:100 }} alt={product.image}></img></td>
              <td>{product.price}</td> 
              <td>{product.color}</td>
              <td>{product.name_category}</td>
              <td>{product.material}</td>
              <td>{product.expiry_date}</td>
              <td>{product.origin}</td>
              <td>{product.description}</td>
              <td style={{ color: product.tinhtranghang ? 'green' : 'gray' }}>{product.tinhtranghang  ? 'Avaiable' : 'Sold out'}</td>
              <td style={{display: 'flex'}}>
                <button  className="btn btn-primary mr-2" >
                  <Link to={`/Edit/${product.id}`} style={{color: 'white'}}>Edit</Link>
                </button>
                <button className="btn btn-danger" >
                  <Link to={`/Delete/${product.id}`}  style={{color: 'white'}}>Delete</Link>
                </button>
                {/* <button onClick={() => handleEdit(product.id)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      
  );
};

export default AllProduct;
