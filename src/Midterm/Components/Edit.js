import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name_shop: '',
        name_product: '',
        avatar: '',
        logo: '',
    });
    const imageRef = useRef(null);

    const handleInputChange = (event) => {
        var target = event.target;
        var name = target.name;
        var type = target.type;
        var value = target.value;
        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/images/");
        }
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/de1update/${id}`, product);
            setProduct({
                name_shop: '',
                name_product: '',
                avatar: '',
                logo: '',
                id: 0,
            });

            alert('Product edited successfully!');

            setTimeout(() => {
                window.location = 'http://localhost:3000/Admin';
            }, 100);
        } catch (error) {
            console.log('Error adding product:', error);
        }
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/de1/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

   
    return (
        <div  className="container">
        <h1>Edit shop</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name_shop">
                Name shop:
                <input
                    required    
                    className="form-control" id="name_shop" 
                    type="text"
                    name="name_shop"
                    value={product.name_shop}
                    onChange={handleInputChange}
                />
            </label>
            </div>
            <div className="form-group">
            <label htmlFor="name_product">
               Name product:
                <input
                    required    
                    className="form-control" id="name_product" 
                    type="text"
                    name="name_product"
                    value={product.name_product}
                    onChange={handleInputChange}
                />
            </label>
            </div>
            <div className="form-group">
            <label htmlFor="logo">
                Logo:
                <input
                    required    
                    className="form-control" id="logo" 
                    type="text"
                    name="logo"
                    value={product.logo}
                    onChange={handleInputChange}
                />
            </label>
            </div>
            <div className="form-group">
            <label htmlFor="avtar">Avatar</label>
                <input 
                type="file" 
                name="avtar" 
                ref={imageRef} 
                onChange={handleInputChange} 
                className="form-control-file" 
                id="avtar" />
            </div>
           
            <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
    </div>
    );
};

export default Edit;
