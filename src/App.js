import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Route/Home.js/Home';
import Profile from './Route/Profile/Profile';
import {useSelector} from 'react-redux'
import Auth from './Route/Auth/Auth'

function App() {
  const isLogIn = useSelector((state)=>state.user.isLogIn)
  console.log(isLogIn)
  return (
    <div className="App">
      <Routes>
        {isLogIn? (
          <Route path='/' element={<Header/>}>
          <Route  index element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        ):(
          <Route  path='/' index element={<Auth/>}/>
        )}
        
      </Routes>
    </div>
  );
}

export default App;
