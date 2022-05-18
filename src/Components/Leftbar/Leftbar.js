import React from 'react';
import './Leftbar.css';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { ListData } from '../../asset/ListData';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const Leftbar = () => {
 
    
  return (
    <div className='leftbar'>
        <Box sx={{width:'100%',maxWidth:360,bgcolor:'Background.paper'}}>
            <nav aria-label='main mailbox folders'>
                <List>
                    {
                        ListData.map((data)=>(
                            <SideBarComponent data={data}/>
                        ))
                    }  
                </List>
            </nav>
        </Box>

    </div>
  )
}

export default Leftbar;