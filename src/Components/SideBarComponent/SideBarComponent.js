import React,{useState} from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import './SideBarComponent';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


const SideBarComponent = ({data}) => {
    const {name,image}=data;
    const [isOpen,setIsOpen] = useState(false)
    
  return (
    <div className='side-component'>
        <ListItem disablePadding>
            <ListItemButton onClick={()=>setIsOpen(!isOpen)}>
                <ListItemIcon>
                    <Avatar src={image}/>
                </ListItemIcon>     
                <ListItemText primary={name}/>
                {name ==='Groups'?
                 (isOpen?<ExpandLess/>:<ExpandMore/>):null}
            </ListItemButton>
            {name === 'Groups'?
                <Collapse in={isOpen} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Avatar/>
                            </ListItemIcon>
                            <ListItemText primary='hello'/>
                        </ListItemButton>
                    </List>

            </Collapse>: null}
        </ListItem>
    </div>
  )
}

export default SideBarComponent