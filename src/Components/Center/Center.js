import React from 'react'
import NewsFeedComponent from '../NewsFeedComponent/NewsFeedComponent'
import FeedComponent from '../FeedComponent/FeedComponent';
import AddPost from '../AddPost/AddPost';
import './Center.css';
import PostComponent from '../PostComponent/PostComponent';


const Center = () => {
  return (
    <div className = 'center-post'>
        <FeedComponent/>
        <AddPost/>
        <PostComponent/>
    </div>
  )
}

export default Center;