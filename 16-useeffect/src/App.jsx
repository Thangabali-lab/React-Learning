import React, { useEffect, useState } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  const achanging = () => {
    console.log("A chi value change zale");
  }

  const bchanging = () => {
    console.log("B chi value change zale");
  }

  {/* YOU CAN USE MULTIPLE USE EFFECT... U CAN ALSO USE FOR bChanging function */}
  useEffect(function () {
    console.log("use effect is running...");
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a + 1)
      }}>change A</button>

      <button onClick={() => {
        setB(b - 1)
      }}>change B</button>
    </div>
  )
}

export default App