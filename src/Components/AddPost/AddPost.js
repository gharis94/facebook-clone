import React,{useState} from 'react'
import Avatar from '@mui/material/Avatar';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Divider from '@mui/material/Divider';
import './AddPost.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';


const AddPost = () => {
    const [text,setText] = useState('');
    const [isOpen,setIsOpen] = useState(false);

    const handleChange=(e)=>{
        setText(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
    };

    const handlePop =()=>{
        setIsOpen(true);
    };

    const handlePopClose =()=>{
        setIsOpen(false);
    }
  return (
      <>
        <Modal open={isOpen}  onClose={()=>handlePopClose()}>
            <div className='modal-pop'>
                <div className='modal-top'>
                    <h2>Create Post</h2>
                    <IconButton onClick={()=>handlePopClose()}>
                        <ClearIcon fill={{color:'gray'}}/>
                    </IconButton>
                </div>
                <Divider/>
                <div className='modal-body'>
                    <textarea rows='4' placeholder={`What's on your mind,name?`}/>
                </div>
                <div className='modal-bottom'>
                    <div className='bottom-right'>
                        <h4>Add to post</h4>
                    </div>
                    <div className='bottom-left'>
                        <IconButton>
                            <VideoCameraBackIcon fontSize='large' style={{fill: 'red'}}/>
                        </IconButton>
                        <IconButton>
                            <PhotoLibraryIcon fontSize='large' style={{fill: 'green'}}/>
                        </IconButton>
                        <IconButton>
                            <MoodIcon fontSize='large' style={{fill: 'yellow'}}/>
                        </IconButton>
                    </div>
                    
                </div>
                <div className='modal-footer'>
                    <input type='submit' value='POST'/>
                </div>
            </div>
        </Modal>
        <div className='add-post'>

            <div className='add-post-top'>
                <Avatar/>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <input placeholder={`What's on your mind,name?`} type='text' onClick={()=>handlePop()}/>
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
    </>
    
  )
}

export default AddPost