"use client"
import React from 'react'
import Bakground from './Components/Bakground'
import Foreground from './Components/Foreground'

const App = () => {
  return (
    <>
        <div className='heading'>
          <Bakground />
          <Foreground />
        </div>
    </>
  )
}

export default App