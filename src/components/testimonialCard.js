import React from 'react'
import './testimonialCard.css'
import Pic from '../images/restauranfood.jpg'

const TestimonialCard = () => {
  return (
    <div className='testimonialCard'>
        <h4>Rating</h4>
        <div className='testimonialImgName'>
            <img src={Pic} />
            <div>Name</div>
        </div>
        <div className='testimonialText'>text</div>
    </div>
  )
}

export default TestimonialCard