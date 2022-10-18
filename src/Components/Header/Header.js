import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import {useDispatch, useSelector} from 'react-redux'
import {userSelector} from '../../store/user/userSelector'
import { friendsSelector } from '../../store/friends/friendsSelector';
import {setIsHide} from '../../store/friends/friendsAction'
import styled from 'styled-components'


const Header = () => {
    const {user} =useSelector(userSelector)
    const {isHide} = useSelector(friendsSelector)
    const dispatch = useDispatch()
    const handleChat=()=>{
        dispatch(setIsHide(!isHide))
    }

    const [search,setSearch]=useState('')
    const handleChange=(e)=>{
        setSearch(e.target.value)
    };
  return (
      <div className='pre-header'>
        <MainContainer>
            <LeftContainer>
                <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032'/>
                <input type='text' value={search} onChange={(e)=>handleChange(e)} placeholder='Search'/>
            </LeftContainer>
            
            <div className='right'>
                                
                <ChatIcon onClick={()=>handleChat()} />
                <ImageContainer >
                    <span>{user.displayName}</span>
                    <Avatar src={user && user.photoURL.toString()}/>
                </ImageContainer>
            </div>
        </MainContainer>
        <Outlet/>
      </div>
    
  )
}

export default Header

const MainContainer =styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:8vh;
    width:100vw;
    position:sticky;
    top:0px;
    background-color:white;
`
const LeftContainer =styled.div`
    flex:.55;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:10px;
    & input{
        margin-left:10px;
        height:3vh;
        width:50vw;
        border:none;
        border-radius:20px;
        background-color:lightgray;
    }
`

const ImageContainer= styled.div`
    flex:.45;
    display:flex;
    justify-content:space-around;
    align-items:center;
    
    & span{
        padding:0 5px;
        white-space:nowrap;    
    }
`