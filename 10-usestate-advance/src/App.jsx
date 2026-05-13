import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({ user: "Thangabali", age: 29 })
  const [arr, setArr] = useState([10, 20, 30])

  let btnClicked = () => {
    let newNum = { ...num }
    newNum.user = "Sanket"
    newNum.age = 30
    setNum(newNum)
  }

  let arrBtnClicked = () => {
    let newArr = [...arr]
    newArr.push(100)
    setArr(newArr)
  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <h2>{arr}</h2>
      <button onClick={btnClicked}>Click</button>
      <button onClick={arrBtnClicked}>Array Clicked</button>
    </div>
  )
}

export default App