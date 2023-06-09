import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/de1delete/${id}`);
            alert('Deleted successfully!');
            
            setTimeout(() => {
                window.location = 'http://localhost:3000/Admin';
            }, 100);
        } catch (error) {
            console.log('Error deleting product:', error);
        }
    };

    useEffect(() => {
        handleDelete();
    }, []);

    return (
        <div>
        </div>
    );
};

export default Delete;
