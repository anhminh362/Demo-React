import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        image: '',
        color: '',
        name_category: '',
        material: '',
        expiry_date: '',
        origin: '',
        description: '',
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
            await axios.put(`http://127.0.0.1:8000/api/update/${id}`, product);
            setProduct({
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
                id: 0,
            });

            alert('Product edited successfully!');

            setTimeout(() => {
                window.location = 'http://localhost:3001';
            }, 100);
        } catch (error) {
            console.log('Error adding product:', error);
        }
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/product/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

   
    return (
        <div  className="container">
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">
                    Name:
                    <input
                        className="form-control" id="name" 
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="price">
                    Price:
                    <input
                        className="form-control" id="price" 
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="Image">
                    Image
                    <img id='preview-img' src={product.image} style={{width:100 }}></img>
                    <br></br>
                    <br></br>
                    <input 
                    type="file"
                    name="image"
                    ref={imageRef}
                    onChange={handleInputChange} 
                    className="form-control-file" 
                    id="Image" />
                    </label>
                </div>
                <div className="form-group">
                <label htmlFor="color">
                    Color:
                    <input
                        className="form-control" id="color" 
                        type="text"
                        name="color"
                        value={product.color}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="name_category">
                    Category:
                    <input
                        className="form-control" id="name_category" 
                        type="text"
                        name="name_category"
                        value={product.name_category}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="material">
                    Material:
                    <input
                        className="form-control" id="material" 
                        type="text"
                        name="material"
                        value={product.material}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="expiry_date">
                    Expiry Date:
                    <input
                        className="form-control" id="expiry_date" 
                        type="date"
                        name="expiry_date"
                        value={product.expiry_date}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <div className="form-group">
                <label htmlFor="origin">
                    Origin:
                    <input
                        className="form-control" id="origin" 
                        type="text"
                        name="origin"
                        value={product.origin}
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
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </label>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default Edit;
