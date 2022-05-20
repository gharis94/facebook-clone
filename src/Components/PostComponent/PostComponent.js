import React,{useState,useEffect,useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './PostComponent.css'
import {DataContext} from '../../context/DataContext';
import CommentComponent from '../CommentComponent/CommentComponent';

const PostComponent = ({title,url}) => {
    const [isOpen,setOpen] = useState(false);
    const [like,setLike] =useState(0);
    const {comments} = useContext(DataContext);
    
    const open =()=>{
        setOpen(!isOpen);
    };

    const increment =(count)=>{
        console.log(count)
        const updated = count+1;
        console.log(updated)
        setLike(updated);
    }

  return (
    <div className={`post-componet${isOpen? 'comments':''}`}>
        <div className='post-top'>
            <div className='top-left'>
                <Avatar src = {
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
            <IconButton onClick = {() => increment(like)}>
                <span style={{'fontSize':'14px'}}>{like}</span>
                <ThumbUpAltIcon style={ {fill:like>0?'lightBlue':''}}/>
            </IconButton>
            <IconButton onClick={()=>open()}>
                <ModeCommentIcon/>
            </IconButton>
            <IconButton>
                <ShareIcon/>
            </IconButton>
        </div>
        {isOpen? (comments.map(comment=>(<CommentComponent className='comment' comment={comment}/>))
            ): null}
        
    </div>
  )
}

export default PostComponent;