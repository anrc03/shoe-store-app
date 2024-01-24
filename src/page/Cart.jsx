import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withLayout from '../hoc/Layout'
import { addItem, checkedOut, decreaseItem } from '../redux/cartSlice'

const Cart = () => {

    const cart = useSelector((state) => state.cart.cartItem)

    const image = '/assets/product1.jpg'
    const dispatch = useDispatch();

    const emptyCart = "Your cart is currently empty"
    const orderComplete = "Thank you for shopping with us!"
    const [display, setDisplay] = useState(emptyCart)

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
    }
    const handleDecreaseQty = (product) => {
        dispatch(decreaseItem(product))
    }

    const handleCheckout = (product) => {
        dispatch(checkedOut(product))
        setDisplay(orderComplete)
    }

    const subtotal = (arr) => {
        let result = 0
        for (let i = 0; i < arr.length; i++) {
            result += (arr[i].cartQuantity * arr[i].price)
        }
        return result;
    }

    const cartFilled = (product) => {
        return(
                <div className="px-4 rounded-3 py-5">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={image} alt={product.productName} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.productName}</h3>
                            <p className="lead fw-bold">
                                {product.price} ({product.cartQuantity}) = {Math.round(product.cartQuantity * product.price)}
                            </p>
                            <button className="btn" onClick={()=>handleDecreaseQty(product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
                            </button>
                            <button className="btn" onClick={()=> handleAddToCart(product)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        )}
    
  return (
    <div className='cart-container'>
        {/* <h2 style={{textAlign:'center'}}>Shopping Cart</h2> */}
        {cart.length === 0 && <div className='cart-empty'><h4 style={{textAlign:'center', marginBottom:450}}><br/>{display}</h4></div>}
        {cart.length !== 0 && cart.map(cartFilled)}
        {cart.length !== 0 && 
            <div>
                <h2 style={{textAlign:'center'}}>Subtotal = Rp. {subtotal(cart)}</h2>
                <br></br>
                <div className="d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary btn-lg' onClick={() => window.confirm("Are you sure?") && dispatch(handleCheckout) }>Complete Order</button>
                </div>
                <br></br>
            </div>}
    </div>
  )
}

export default withLayout(Cart)
