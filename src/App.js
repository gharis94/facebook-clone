import React, { useEffect } from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Route/Home.js/Home';
import Profile from './Route/Profile/Profile';
import {useDispatch, useSelector} from 'react-redux'
import Auth from './Route/Auth/Auth'
import { onAuthChange,signOutF } from './utils/firebase';
import {setCurrentUser} from './store/user/userAction'
import {userSelector} from './store/user/userSelector'

function App() {
  const {user} = useSelector(userSelector)
  const dispatch = useDispatch()
    
  useEffect(()=>{
    const unsubscribe = onAuthChange((x)=>{
      dispatch(setCurrentUser(x))
    })
    return unsubscribe
  },[])
  
  return (
    <div className="App">
      
        {user? (
          <Routes >
            <Route path='/' element={<Header/>}>
              <Route  index element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
          </Routes>
        ):(
          <Auth/>
        )}
        
      
    </div>
  );
}

export default App;
