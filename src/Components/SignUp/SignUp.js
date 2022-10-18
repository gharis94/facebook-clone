import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {createUserWithEmail,createUserDocFromAuth} from '../../utils/firebase'
import Typography from '@mui/material/Typography'
import styled from 'styled-components';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const [state,setState] =React.useState(initialState)
  const {displayName,email,password,confirmPassword} = state;

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setState({...state,[name]:value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    console.log(displayName)
    if(password !== confirmPassword){
      
      return(
      <Stack sx={{width:'100%'}} spacing={2}>
        <Alert severity='warning'>Password and Confirm Password is not same</Alert>
      </Stack>
        
      )
    }
    try{
      
      const {user} = await createUserWithEmail(email,password)
      createUserDocFromAuth(user,{displayName})
      setState(initialState)
    }catch(error){
      console.log(error)
    }
    
    
    
  }

  return (
    <Card sx={{ minWidth: 275,  }}>
      <CardContent>
          <Typography variant='h5'>Register Now</Typography>
          <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '28ch' },
              display:'flex', flexDirection:'column'
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e)=>handleSubmit(e)}
          >
            <TextField 
              id="standard-basic" 
              label="Name" 
              name='displayName' 
              variant="standard" 
              value={displayName} 
              type='text' 
              required  
              onChange={(e)=>handleChange(e)}
            />
            <TextField 
              id="standard-basic" 
              label="Email" 
              name='email' 
              variant="standard" 
              value={email} 
              type='email' 
              required  
              onChange={(e)=>handleChange(e)}
            />
            <TextField 
              name="password" 
              id="standard-basic" 
              label="Password" 
              variant="standard" 
              value={password} 
              type='password' 
              required
              onChange={(e)=>handleChange(e)}
            />
            <TextField 
              name="confirmPassword" 
              id="standard-basic" 
              label="Confirm Password" 
              variant="standard" 
              value={confirmPassword} 
              type='password' 
              required
              onChange={(e)=>handleChange(e)}
            />
            <Button 
          type='submit' 
          sx={{borderRadius:'10px',margin:'5px'}}  variant='contained'
          
          >
          SIGN up
          </Button>
        </Box>
        
        
      </CardContent>
    </Card>
  )
}

export default SignUp