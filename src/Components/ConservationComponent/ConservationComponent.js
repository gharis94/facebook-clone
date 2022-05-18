import React from 'react'
import Avatar from '@mui/material/Avatar';
import './ConservationComponent.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ConservationComponent = ({group,name,img,creategroup}) => {
    console.log(creategroup)
  return (
      <>
        {
            !group?(
                <div className='conservation-component'>
                    <Avatar src={img}/>
                    <span>{name}</span>
                </div>
            ):(
                <div className='group-component'>
                    {creategroup ?(
                        <>
                            <Avatar>
                                <AddCircleOutlineIcon/>
                            </Avatar>
                            <span>Create Group</span>
                        </>
                    ):(
                        <>
                            <Avatar src={img}/>
                            <span>{name}</span>
                        </>
                    )}
                    
                </div>
            )
        }
      </>
    
  )
}

export default ConservationComponent