import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='' />
            <h1>{props.user} age-{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat quibusdam dolore. Facilis quisquam quidem quis reprehenderit labore eligendi perferendis quam ad, sit ipsam deleniti temporibus ducimus, eveniet asperiores soluta.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card