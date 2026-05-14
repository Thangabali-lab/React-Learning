import axios from 'axios'
import { useState } from 'react'
export const App = () => {

  const [getData, setData] = useState([])


  const onclicked = async () => {

    {/* 1st Method */ }
    {   /* const response = await fetch('https://picsum.photos/v2/list')
    const data = await response.json()*/}

    {/* Using Axios */ }
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  return (
    <div>
      <button onClick={onclicked}>Get Data</button>

      {getData.map(function (elem, idx) {
        return<h3 className='div'>Hello,{elem.author}--{idx}</h3>
      })}

    </div>
  )
}


export default App