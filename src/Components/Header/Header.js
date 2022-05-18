import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
    const [search,setSearch]=useState('')
    const handleChange=(e)=>{
        setSearch(e.target.value)
    };
  return (
      <React.Fragment>
        <div className='header'>
            <div className='left'>
                <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032'/>
                <input type='text' value={search} onChange={(e)=>handleChange(e)} placeholder='Search'/>
            </div>
            <div className='center'>
                <HomeIcon/>
                 <GroupIcon/>
                 <OndemandVideoIcon/>
                 <StoreIcon/>
                 <SportsEsportsIcon/>               
            </div>
            <div className='right'>
                <div className='right-name'>
                    <Avatar/>
                    <span>name</span>
                </div>
                <WidgetsIcon/>
                <ChatIcon/>
                <CircleNotificationsIcon/>
                <ArrowDropDownCircleIcon/>
            </div>
        </div>
        <Outlet/>
      </React.Fragment>
    
  )
}

export default Header