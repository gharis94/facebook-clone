import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './PostComponent.css'


const PostComponent = () => {
  return (
    <div className='post-componet'>
        <div className='post-top'>
            <div className='top-left'>
                <Avatar/>
                <div className='time-stamp'>
                    <p>Name</p>
                    <div className='stamp'>
                        <span>time</span>
                        <PublicIcon/>
                    </div>

                </div>
            </div>
            <div className='top-right'>
                <IconButton>
                    <MoreHorizIcon/>
                </IconButton>
            </div>

        </div>
        <div className='post-body'>
            <span>erwer ewrwerwrwsdfew erwer ewrw</span>
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/>
        </div>
        <div className='post-bottom'>
            <IconButton>
                <ThumbUpAltIcon/>
            </IconButton>
            <IconButton>
                <ModeCommentIcon/>
            </IconButton>
            <IconButton>
                <ShareIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default PostComponent