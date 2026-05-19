import React from 'react'
import { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {

  const [theme, setTheme] = useState('black')
  return (
    <div>
      <h1>This is {theme} theme</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App