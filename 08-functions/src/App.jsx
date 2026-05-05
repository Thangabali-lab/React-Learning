import React from 'react'

const App = () => {

  function btnclicked() {
    console.log("naughty boy you clicked mee")
  }

  function mouseEntered() {
    console.log("Mouse Entered")
  }

  function inputChange(val) {
    console.log("User is Typing.....", val)
  }

  function pageScrolling(val) {
    if (val > 0) {
      console.log('Seedha Scrolling');
    } else {
      console.log("Ulta Scrolling");
    }
  }
  return (
    <div>
      <div>
        <button onDoubleClick={btnclicked}>Click Me</button>
      </div>

      <div>
        <button onMouseEnter={mouseEntered}>Mouse Entered</button>
      </div>

      <div>
        <input onChange={function (any) {
          inputChange(any.target.value)
        }} type="text" placeholder='Enter Name' />
      </div>

      <div onWheel={(ele) => {
        pageScrolling(ele.deltaY)
      }}>
        <div className='page1'>page1</div>
        <div className='page2'>page2</div>
      </div>
    </div>
  )
}

export default App