import React from 'react'

import Card from '../../components/Card'

import './index.css'

const Home = () => {
  return (
    <>
      <h2 className='title'>Title</h2>
      <div className='allCards-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default Home
