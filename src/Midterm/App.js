import React, { Component } from 'react';

import Add from './Page/Add';
import Home from './Page/Home';
import Edit from './Page/Edit';
import Delete from './Page/Delete';
import { Routes, Route } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div class='container'>
                
                <button className='btn btn-danger'><a href='/Add' style={{color:'white'}}>Add</a></button>
                <Routes>    
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/Add' element={<Add></Add>} />
                    <Route path="/Edit/:id" element={<Edit></Edit>}/>
                    <Route path="/Delete/:id" element={<Delete></Delete>}/>
                </Routes>
            </div>

        );
    }
}

export default App;