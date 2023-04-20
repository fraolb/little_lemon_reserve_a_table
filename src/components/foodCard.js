import React from 'react'
import './foodCard.css'
import Pic from '../images/restauranfood.jpg'

const FoodCard = () => {
  return (
    <div className='foodCard'>
        <img src={Pic} />
        <div className='foodNamePrice'>
            <div className='foodName'>Greek Salad</div>
            <div className='foodPrice'>12$</div>
        </div>
        <div className='foodContent'>
            The famous cirsy lettuce. peppers and other shit in it.
        </div>
        <div className='foodDelivery'>
            Order Delivery
        </div>
    </div>
  )
}

export default FoodCard