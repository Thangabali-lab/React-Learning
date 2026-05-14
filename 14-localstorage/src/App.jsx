import React from 'react'

const App = () => {

  const user = {
    name: 'Thangabali',
    age: 30,
    city: 'pune'
  }

  localStorage.setItem('data', JSON.stringify(user))
  const retriveData = JSON.parse(localStorage.getItem('data'))
  console.log(retriveData);
  
  return (
    <div>App</div>
  )
}

export default App