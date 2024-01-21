import React from 'react'
import withLayout from '../HOC/Layout'

const OrderCompleted = () => {
  return (
    <div className='cart-empty'><h4 style={{textAlign:'center', marginBottom:450}}><br/>Thank you for shopping with us!</h4></div>
  )
}

export default withLayout(OrderCompleted)
