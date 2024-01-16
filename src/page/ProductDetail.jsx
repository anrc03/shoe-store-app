import React from 'react'
import withLayout from '../HOC/Layout'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductDetail = () => {

    const {productId} = useParams();
    const products = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
    }
   
    // console.log(products)
    // console.log(productId)

  return (
    <div className='container' style={{display:'flex'}}>
        <div className='fixed' style={{width:800, marginRight:70}}>
            <img src='/assets/product1.jpg' alt='product'></img>
        </div>

        <div className='flex-item' style={{flexGrow:1, marginTop:100}}>
            <h1>{products[productId-1].name}</h1>
            <h2>{`$ ${products[productId-1].price}`}</h2>
            <br></br>
            <p> {products[productId-1].name} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sit ut dolor alias dolores, 
                tempore nihil corporis mollitia dicta distinctio. Iure unde possimus, temporibus quos iste accusamus totam maxime reiciendis!</p>
            <br></br>
            <button onClick={() => handleAddToCart(products[productId-1])}>Add to Cart</button>
        </div>
    </div>
  )
}

export default withLayout(ProductDetail)