import React from 'react'
import './testimonialCard.css'
import Pic from '../images/restauranfood.jpg'

const TestimonialCard = (props) => {
  return (
    <div className='testimonialCard'>
        <h4>Rating</h4>
        <div className='testimonialImgName'>
            <img src={Pic} />
            <div>{props.data.name}</div>
        </div>
        <div className='testimonialText'>{props.data.text}</div>
    </div>
  )
}

export default TestimonialCard