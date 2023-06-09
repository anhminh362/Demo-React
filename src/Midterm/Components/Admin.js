import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/de1")
      .then(response => response.json())
      .then(product => setProducts(product));
  }, []);

  return (

    <div> 
        <button className='btn btn-danger'><a href='/Add' style={{color:'white'}}>Add</a></button>
          <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name Shop</th>
            <th>Avatar</th>
            <th>Name Product</th>
            <th>Logo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name_shop}</td>
              <td><img src={product.avatar} style={{width:100 }} alt={product.avatar}></img></td>
              <td>{product.name_product}</td> 
              <td><img src={product.logo} style={{width:100 }} alt={product.logo} ></img></td>
              
              <td style={{display: 'flex'}}>
                <button  className="btn btn-primary mr-2" >
                  <Link to={`/Edit/${product.id}`} style={{color: 'white'}}>Edit</Link>
                </button>
                <button className="btn btn-danger" >
                  <Link to={`/Delete/${product.id}`}  style={{color: 'white'}}>Delete</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      
  );
};

export default Admin;
