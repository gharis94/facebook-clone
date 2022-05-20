import React,{useContext} from 'react';
import './Rightbar.css';
import Divider from '@mui/material/Divider';
import ConservationComponent from '../ConservationComponent/ConservationComponent';
import {UserContext} from '../../context/UserContext';

const Rightbar = () => {
  const {user} = useContext(UserContext);
  console.log('user',user)
  return (
    <div className='right-bar'>
      <div className='sponsor'>
        <h4>Sponsor</h4>
        <div className='sponsor-content'>

        </div>
      </div>
      <Divider/>
      <div className='contacts'>
        <h4>contacts</h4>
        {
          user && user.map(user=>(
              <ConservationComponent key={user.id} name={user.name} group={false} img={`https://avatars.dicebear.com/api/human/${user.id}.svg`}/>
          ))
        }
         
      </div>
      <Divider/> 
      <div className='group'>
        <h4>Group Conservation</h4>
        <ConservationComponent group={true} creategroup={true}/>
        <ConservationComponent group={true} creategroup={false} name='hello'/>
      </div>
    </div>
  )
}

export default Rightbar