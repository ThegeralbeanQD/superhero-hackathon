import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../../components/Card'

import './index.css'

const Home = () => {
  return (
    <>
      <h2 className='title'>Superhero's</h2>
      <div className='allCards-container'>
        <Card />
        <div className='wonkyCard-button'> 
          <Card /> 
          <Link to='/fight'><button className='mainbtn'><strong>Lets Begin</strong></button></Link>
        </div>
        <Card />
      </div>
    </>
  )
}

export default Home
