import React from 'react'
import Leftbar from '../../Components/Leftbar/Leftbar';
import Rightbar from '../../Components/Rightbar/Rightbar';
import './Home.css';
import Center from '../../Components/Center/Center';

const Home = () => {
  return (
    <div className='home'>
        <div className='home-left'>
            <Leftbar/>
        </div>
        <div className='home-center'>
            <Center/>
        </div>
        <div className='home-right'>
            <Rightbar/>
        </div>
    </div>
  )
}

export default Home