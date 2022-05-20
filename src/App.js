import React,{useContext} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Route/Home.js/Home';
import Profile from './Route/Profile/Profile';
import { DataContext } from './context/DataContext';


function App() {
  const {data} = useContext(DataContext)
  console.log(data)
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
