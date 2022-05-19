import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './SideBarComponent';

const SideBarComponent = ({data}) => {
    const {name,image}=data;
    
  return (
    <div className='side-component'>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Avatar src={image}/>                           
                </ListItemIcon>
                <ListItemText primary={name}/>
            </ListItemButton>
        </ListItem>
    </div>
  )
}

export default SideBarComponent