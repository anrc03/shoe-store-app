import React from 'react'
import withLayout from '../HOC/Layout'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Product = () => {

    const product1 = "public/assets/product1.jpg"
    // const product2 = "public/assets/product2.jpg"

    const products = useSelector((state) => state.cart.items)
    // console.log(products)



    const productCards = products.map(product => (
        <div key={product.id} className="card text-center mb-3" style={{ width: "18rem", marginLeft:20}}>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <img src={product1} alt='product' style={{ width: "16rem" }}></img>
                <p className="card-text"> {product.description} </p>
                <Link to={`/product-detail/${product.id}`} className="btn btn-primary"> See Detail </Link>
            </div>
        </div>
    ))

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

