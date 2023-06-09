import React, { useEffect, useState } from 'react';

const Home = ()=>{
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        fetch ('http://127.0.0.1:8000/api/de1')
        .then(response => response.json())
        .then(data=>setProduct(data))
    },[]);
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <h2>LazMall</h2>
                <p style={{color: '#00C4FF'}}>Xem thêm</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {product.map((data,index) =>(
                    
                    <div className="col"  key={index}>
                      <div className="card h-100">
                        <img src={data.avatar} className="card-img-top" alt={data.avatar}/>
                        <div className="card-body  ">
                          <h5 className="card-title">{data.name_shop}</h5>
                          <p className="card-text">
                          {data.name_product}
                          </p>
                        </div>
                      </div>
                   
                  </div>
                  
                  ))} 
                 
            </div>

        </div>
    )
}
export default Home;