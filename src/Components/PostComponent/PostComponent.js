import React from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './PostComponent.css'


const PostComponent = ({title,url}) => {
  return (
    <div className='post-componet'>
        <div className='post-top'>
            <div className='top-left'>
                < Avatar src = {
                    `https://avatars.dicebear.com/api/:sprites/:${title}.svg`
                }
                />
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
            <span>{title}</span>
            <img src={url}/>
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