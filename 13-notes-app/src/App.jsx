import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  {/* created for to show data on cards */ }
  const [getData, setGetData] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyData = [...getData]
    copyData.push({ title, details })

    setGetData(copyData)

    console.log(copyData);

    setTitle('')
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyData = [...getData]
    copyData.splice(idx, 1)
    setGetData(copyData)
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 p-10 lg:w-1/2 flex-col items-start'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* First Input Heanding */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        {/* Second Input Details */}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full font-medium py-2 h-30 flex items-start  border-2 outline-none  rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>Add Notes</button>
      </form>


      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>

          {
            getData.map(function (elem, idx) {
              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default App