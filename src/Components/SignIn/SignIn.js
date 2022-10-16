import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';
import {signInWithGoogle,signInWithEmail,createUserDocFromAuth} from '../../utils/firebase'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function BasicCard() {
  const [state,setState] =useState({email:'',password:''})
  const {email,password} = state

  const googleSign =async()=>{
    const {user} = await signInWithGoogle();
    await createUserDocFromAuth(user)
  }
  const emailSign =async(email,password)=>{
    const {user} = signInWithEmail(email,password)
    console.log(user)
  }
  const handleChange=(e)=>{
    
    const {value,name} =e.target
    setState({...state,[name]:value})
  }
  return (
    <Card sx={{ minWidth: 275,  }}>
      <CardContent>
          <Typography variant='h5'>Sign In</Typography>
          <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '28ch' },
              display:'flex', flexDirection:'column'
            }}
            noValidate
            autoComplete="off"
          >
            
            <TextField id="standard-basic" label="Email" name='email' variant="standard" value={email} type='email' required onChange={(e)=>handleChange(e)} />
            <TextField name="password" id="standard-basic" label="Password" variant="standard" value={password} type='password'onChange={(e)=>handleChange(e)} required/>
            </Box>
      <CardActions  sx = {{
          display: 'flex',
          justifyContent: 'center'}} >
        <Button onClick={(email,password)=>emailSign(email,password)} variant='contained'>SIGN IN</Button>
        <Button onClick={()=>googleSign()} variant='contained'>GOOGLE SIGN IN</Button>
      </CardActions>
        <LinkContainer to='/signup'>Register Now?</LinkContainer>
      </CardContent>
    </Card>
  );
}

const LinkContainer = styled(Link)`
  text-decoration:none;
  
`