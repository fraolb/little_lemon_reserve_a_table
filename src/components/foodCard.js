import React from 'react'
import './foodCard.css'
import Pic from '../images/restauranfood.jpg'

const FoodCard = (props) => {
  return (
    <div className='foodCard'>
        <img src={props.data.img} />
        <div className='foodNamePrice'>
            <div className='foodName'>{props.data.name}</div>
            <div className='foodPrice'>{props.data.price}$</div>
        </div>
        <div className='foodContent'>
           {props.data.content}
        </div>
        <div className='foodDelivery'>
            Order Delivery
        </div>
    </div>
  )
}

export default FoodCard