import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Route/Home.js/Home';
import Profile from './Route/Profile/Profile';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route  index element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
