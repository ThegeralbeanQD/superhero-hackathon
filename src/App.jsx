import React from 'react'
import { Routes, Route } from 'react-router-dom';

import * as Pages from './Pages'
import { Wrapper } from './components'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<Pages.Home />} />
          <Route path='/characters' element={<Pages.Characters />} />
          <Route path="/fight" element={<Pages.Fight />} />
        </Route>
      </Routes>
    </>
  )
}

export default App