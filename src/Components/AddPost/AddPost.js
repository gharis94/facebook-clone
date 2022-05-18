import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Divider from '@mui/material/Divider';
import './AddPost.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';


const AddPost = () => {
    const [text,setText] = useState('');

    const handleChange=(e)=>{
        setText(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='add-post'>
        <div className='add-post-top'>
            <Avatar/>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type='text' value={text} onChange={(e)=>handleChange(e)} placeholder={`What's on Your mind?,name`}/>
            </form>
        </div>
        <Divider/>
        <div className='add-post-bottom'>
            <div className='option'>
                <VideoCameraBackIcon style={{fill: 'pink'}}/>
                <span>Live Video</span>
            </div>
            <div className='option'>
                <PhotoLibraryIcon style={{fill: 'green'}}/>
                <span>Photo/video</span>
            </div>
            <div className='option'>
                <MoodIcon style={{fill: 'yellow'}}/>
                <span>Feeling/Activity</span>
            </div>
            
        </div>
        
    </div>
  )
}

export default AddPost