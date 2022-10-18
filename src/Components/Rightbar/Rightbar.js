import React,{useState, useEffect} from 'react';
import './Rightbar.css';
import Divider from '@mui/material/Divider';
import ConservationComponent from '../ConservationComponent/ConservationComponent';
import { useSelector,useDispatch } from 'react-redux';
import {setFriends,addToGroup} from '../../store/friends/friendsAction'

import { friendsSelector } from '../../store/friends/friendsSelector';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Rightbar = () => {
  const {isHide,friendList,group} = useSelector(friendsSelector)
  const dispatch = useDispatch();
  const[isOpen,setIsOpen]=useState(false)
  const[groupName,setGroupname] = useState('')

  useEffect(()=>{
    const fetchFriends = async () => {
      const rsp = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await rsp.json();
      
      dispatch(setFriends(data))
    }
    fetchFriends()
  },[])

  const handleChange=(e)=>{
    setGroupname(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addToGroup(group,groupName))
    setGroupname('')
  }

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
          isHide && friendList && friendList.map(user => (
              <ConservationComponent key={user.id} name={user.name} group={false} img={`https://avatars.dicebear.com/api/pixel-art/${user.id}.svg`}/>
          ))
        }
         
      </div>
      <Divider/> 
      <div className='group'>
        <h4>Group Conservation</h4>
        <ButtonContainer  onClick = {() => setIsOpen(!isOpen)}>
            <ConservationComponent group={true} creategroup={true} />
        </ButtonContainer>
        
        { isOpen?
            (
              <>  
                  <Box 
                    sx = {
                      {
                        '& > :not(style)': {
                          m: 1,
                          width: '25ch'
                        },
                      }
                    }
                    component='form' 
                    noValidate
                    autoComplete='off'
                    onSubmit={(e)=>handleSubmit(e)}
                  >
                    <TextField 
                      id='filled-basic' 
                      label='Add New Group'
                      variant='standard'
                      value={groupName}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Box>
                  {
                    group && group.map(item=>(
                        <ConservationComponent 
                          group={true} 
                          creategroup={false} 
                          name={item}
                          key={item}
                        />
                    ))  
                  }
                  
              </>
              
            ):null
        }
        
      </div>
    </div>
  )
}

export default Rightbar

const ButtonContainer=styled.div`
 cursor:pointer 
`