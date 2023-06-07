import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';


var Objects = 'http://127.0.0.1:8000/api/product';
var Count = Object.keys(Objects).length;


const Add = () => {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
        tinhtranghang: true,
        id: ''
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

    useEffect(() => {
        const fetchProductCount = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/product');
                const products = response.data;
                const count = products.length;
                setNewProduct((prevProduct) => ({
                    ...prevProduct,
                    id: String(count + 1),
                }));
            } catch (error) {
                console.error('Error fetching product count:', error);
            }
        };
        fetchProductCount();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/add', newProduct);
            setNewProduct({
                name: '',
                price: '',
                image: '',
                color: '',
                name_category: '',
                material: '',
                expiry_date: '',
                origin: '',
                description: '',
                tinhtranghang: true,
                id: Count + 1,
            });

            alert('Product added successfully!');
            setTimeout(() => {
                window.location = 'http://localhost:3001';
            }, 100);
        } catch (error) {
            alert('Error adding product:', error);
        }
    };

    return (
        <div  className="container">
            <h1>Add new pro</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">
                    Name:
                    <input
                        required
                        className="form-control" id="name" 
                        type="text"
                        name="name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="price">
                    Price:
                    <input
                        required    
                        className="form-control" id="price" 
                        type="number"
                        name="price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="Image">Image</label>
                    <input 
                    type="file" 
                    name="image" 
                    ref={imageRef} 
                    onChange={handleInputChange} 
                    className="form-control-file" 
                    id="Image" />
                </div>
                <div className="form-group">
                <label htmlFor="color">
                    Color:
                    <input
                        required
                        className="form-control" id="color" 
                        type="text"
                        name="color"
                        value={newProduct.color}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="name_category">
                    Category:
                    <input
                        required
                        className="form-control" id="name_category" 
                        type="text"
                        name="name_category"
                        value={newProduct.name_category}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="material">
                    Material:
                    <input
                        required
                        className="form-control" id="material" 
                        type="text"
                        name="material"
                        value={newProduct.material}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="expiry_date">
                    Expiry Date:
                    <input
                        required
                        className="form-control" id="expiry_date" 
                        type="date"
                        name="expiry_date"
                        value={newProduct.expiry_date}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="origin">
                    Origin:
                    <input
                        required
                        className="form-control" id="origin" 
                        type="text"
                        name="origin"
                        value={newProduct.origin}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="description">
                    Description:
                    <input
                        className="form-control" id="description" 
                        type="text"
                        name="description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default Add;
