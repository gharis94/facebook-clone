import React,{useContext} from 'react'
import FeedComponent from '../FeedComponent/FeedComponent';
import AddPost from '../AddPost/AddPost';
import './Center.css';
import PostComponent from '../PostComponent/PostComponent';
import { DataContext } from '../../context/DataContext';


const Center = () => {
  const {data} = useContext(DataContext);
  
  return (
    <div className = 'center-post'>
        <FeedComponent/>
        <AddPost/>
        {
          data.map(post=>(
            <PostComponent key={post.id} title={post.title} url={null}/>
          ))
        }
    </div>
  )
}

export default Center;