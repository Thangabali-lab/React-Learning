import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function (ele, idx) {
        return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag} color={ele.color} />
      })}
    </div>
  )
}

export default RightContent