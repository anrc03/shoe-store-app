import React, { useEffect, useState } from 'react'
import withLayout from '../hoc/Layout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decreaseItem } from '../redux/cartSlice'
import axios from 'axios'

const Product = () => {

    const product1 = "public/assets/product1.jpg"
    const product2 = "public/assets/laptop.jpg"

    const productPic = [product1, product2]

    const url = "http://localhost:8081/api/v1/products"
    const [productList, setProductList] = useState([])

    console.log(productList)
    
    useEffect(() => {
        axios.get(url).then((response) => {
            setProductList(response.data);
        });
    }, []);

    const dispatch = useDispatch();
    // const storage = localStorage.getItem("cart")

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
    }
    const handleDecreaseQty = (product) => {
        dispatch(decreaseItem(product))
    }


    const productCards = productList.map((product) => (
      <div
        key={product.id}
        className="card text-center mb-3"
        style={{ width: "18rem", marginLeft: 20 }}
      >
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <img src={productPic[Math.floor(Math.random() * productPic.length)]} alt="product" style={{ width: "16rem", height: "16rem" }}></img>
          <p className="card-text"> {product.store.storeName} </p>
          <p className="card-text"> {product.description} </p>
          
          <button className="btn btn-danger m-1" onClick={() => handleDecreaseQty(product)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
              </svg>
            </button><Link
            to={`/product-detail/${productList.indexOf(product)}`}
            className="btn btn-primary"
          >
            {" "}
            See Detail{" "}
          </Link>

          <button className="btn btn-warning m-1" onClick={() => handleAddToCart(product)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </button>

        </div>
      </div>
    ));

  return (
    <div style={{backgroundColor:'white'}}>
        <h1 style={{textAlign:'center', fontWeight: 'lighter', color: 'black', fontFamily:''}}>OUR PRODUCTS</h1>
        <br></br>
        <div className='row'>
            {productCards}
        </div>
    </div>
    
  )
}

export default withLayout(Product)

