import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './home';
import CollapsibleExample from './Navbar';

function Approuter() {
  return (
    <div>
        
<Router>
<CollapsibleExample/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
    </Routes>
</Router>
        
    </div>
  )
}

export default Approuter