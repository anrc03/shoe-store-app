import React, { useEffect, useState } from 'react'
import withLayout from '../hoc/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import axios from 'axios';

const ProductDetail = () => {

    const {productId} = useParams();

    const url = "http://localhost:8081/api/v1/products"
    const [productList, setProductList] = useState([])

    console.log(productList)
    
    useEffect(() => {
        axios.get(url).then((response) => {
            console.log(response)
            setProductList(response.data);
        });
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
    }

  return (
    <div className='container' style={{display:'flex'}}>
        {console.log(productList)}
        <div className='fixed' style={{width:800, marginRight:70}}>
            <img src="/assets/laptop.jpg" alt='product' style={{ width: "40rem", height: "40rem" }}></img>
        </div>

        <div className='flex-item' style={{flexGrow:1, marginTop:100}}>
            <h1>{productList[productId].productName}</h1>
            <h2>{`Rp. ${productList[productId].price}`}</h2>
            <br></br>
            <p> {productList[productId].productName} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sit ut dolor alias dolores, 
                tempore nihil corporis mollitia dicta distinctio. Iure unde possimus, temporibus quos iste accusamus totam maxime reiciendis!</p>
            <br></br>
            <button onClick={() => handleAddToCart(productList[productId])}>Add to Cart</button>
            <br></br>
            <br></br>
            <button onClick={() => navigate("/cart")}>Check your cart</button>
        </div>
    </div>
  )
}

export default withLayout(ProductDetail)