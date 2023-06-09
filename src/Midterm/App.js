import React, { Component } from 'react';

import Home from './Page/Home';
// import Add from './Page/Add';
// import Edit from './Page/Edit';
// import Delete from './Page/Delete';
import { Routes, Route } from 'react-router-dom';
import De1 from './Components/Home';
import Admin from './Components/Admin';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Delete from './Components/Delete';

class App extends Component {

    render() {
        return (
            <div class='container'>
                
                {/* <button className='btn btn-danger'><a href='/Add' style={{color:'white'}}>Add</a></button>
                <Routes>    
                    <Route path='/' element={<Home></Home>} />
                    <Route path='/Add' element={<Add></Add>} />
                    <Route path="/Edit/:id" element={<Edit></Edit>}/>
                    <Route path="/Delete/:id" element={<Delete></Delete>}/>
                </Routes> */}
                {/* <De1></De1> */}
                <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <a className="navbar-brand" href="/"><img src='https://inkythuatso.com/uploads/images/2021/09/lazada-logo-inkythuatso-14-11-38-31.jpg' style={{width:200, borderRadius: 50 }}></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="/">Trang chủ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="admin-tab" data-toggle="tab" href="/Admin">Admin</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
                <Routes>    
                    <Route path='/' element={<De1></De1>} />
                    <Route path='/Admin' element={<Admin/>} />
                    <Route path='/Add' element={<Add></Add>} />
                    <Route path="/Edit/:id" element={<Edit></Edit>}/>
                    <Route path="/Delete/:id" element={<Delete></Delete>}/>
                </Routes> 
            </div>

        );
    }
}

export default App;