import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [name, setName] = useState('Sanket')

  let increaseNum = () => {
    setNum(num + 1)
  }

  let decreaseNum = () => {
    setNum(num - 1)
  }

  let jumpNum = () => {
    setNum(num + 5)
  }

  let setUserName = () => {
    setName('Thangabali')
  }
  return (
    <div>
      <div>
        <h1>Hello My Name is {name}</h1>
      </div>
      <div>
        <h1>{num}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={jumpNum}>Increase by 5</button>
        <button onClick={setUserName}>Change Name</button>
      </div>
    </div>
  )
}

export default App