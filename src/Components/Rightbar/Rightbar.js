import React from 'react';
import './Rightbar.css';
import Divider from '@mui/material/Divider';
import ConservationComponent from '../ConservationComponent/ConservationComponent';

const Rightbar = () => {
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
         <ConservationComponent name='gharis' group={false} img='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'/>
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