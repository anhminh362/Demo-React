import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';


const Add = () => {
    const [newProduct, setNewProduct] = useState({
        name_shop: '',
        name_product: '',
        avatar: '',
        logo: ''
    });
    
    const imageRef=useRef(null);
    const handleInputChange = (event) => {
        var target = event.target;
        var name = target.name;
        var type = target.type;
        var value = target.value;
        if (type === 'file') {
            value = imageRef.current.value.replace(/C:\\fakepath\\/i, "/images/");
           
              
        }

        setNewProduct({ ...newProduct, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newProduct);
        try {
            await axios.post('http://127.0.0.1:8000/api/de1add', newProduct);
            setNewProduct({
                name_shop: '',
                name_product: '',
                avatar: '',
                logo: ''
            });

            alert('Product added successfully!');
            setTimeout(() => {
                window.location = 'http://localhost:3000/Admin';
            }, 100);
        } catch (error) {
            alert('Error adding product:', error);
            console.log(2,error);
        }
    };

    return (
        <div  className="container">
            <h1>Add new shop</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name_shop">
                    Name shop:
                    <input
                        required    
                        className="form-control" id="name_shop" 
                        type="text"
                        name="name_shop"
                        value={newProduct.name_shop}
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
                        value={newProduct.name_product}
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
                        value={newProduct.logo}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                    <input 
                    type="file" 
                    name="avatar" 
                    ref={imageRef} 
                    onChange={handleInputChange} 
                    className="form-control-file" 
                    id="avatar" />
                </div>
               
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default Add;
