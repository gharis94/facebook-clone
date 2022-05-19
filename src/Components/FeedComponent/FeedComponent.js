import React from 'react'
import Avatar from '@mui/material/Avatar';
import './FeedComponent.css'

const feedComponent = () => {
  return (
    <div className='feed'>
        <div  className = 'container'
        style = {{backgroundImage: `url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
            <Avatar/>
            <span className='text'>hello</span>
        </div>

        <div  className = 'container'
        style = {{backgroundImage: `url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
            <Avatar/>
            <span className='text'>hello</span>
        </div>
        
        <div  className = 'container'
        style = {{backgroundImage: `url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
            <Avatar/>
            <span className='text'>hello</span>
        </div>

        <div  className = 'container'
        style = {{backgroundImage: `url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`}}>
            <Avatar/>
            <span className='text'>hello</span>
        </div>
    </div>
  )
}

export default feedComponent;