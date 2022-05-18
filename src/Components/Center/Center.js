import React from 'react'
import NewsFeedComponent from '../NewsFeedComponent/NewsFeedComponent'
import FeedComponent from '../FeedComponent/FeedComponent';
import AddPost from '../AddPost/AddPost';
import './Center.css';

const Center = () => {
  return (
    <div className = 'center-post'>
        <FeedComponent/>
        <AddPost/>
    </div>
  )
}

export default Center