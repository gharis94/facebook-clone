import React from 'react';
import './CommentComponent.css';
import Avatar from '@mui/material/Avatar';

const CommentComponent = ({comment}) => {
    const {id,name,body} =comment;
  return (
    <div className='comment-component'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`}/>
        <div className='comment-details'>
            <h4>{name}</h4>
            <span>{body}</span>
        </div>
    </div>
  )
}
export default CommentComponent;