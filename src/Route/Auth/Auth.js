import React from 'react'
import SignIn from '../../Components/SignIn/SignIn'
import {Routes,Route} from 'react-router-dom'
import styled from 'styled-components'
import SignUp from '../../Components/SignUp/SignUp'

const Auth = () => {
  return (
    <Container>
      <Routes>
        <Route path='/'  element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/> 
      </Routes>

    </Container>
  )
}

export default Auth

const Container = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px;
`