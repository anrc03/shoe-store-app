import axios from 'axios';
import React, { useEffect, useState } from 'react'
import withLayout from '../hoc/Layout';
import { Link } from 'react-router-dom';

const Store = () => {

    const url = "http://localhost:8081/store"
    const shop = "/assets/shop.svg"

    const [storeList, setStoreList] = useState([])
    
    useEffect(() => {
        axios.get(url).then((response) => {
            setStoreList(response.data);
        });
    }, []);

    const storeCards = storeList.map((store) => 
        // <>
        //     {console.log(store.name)}
        //     <h1>{store.name}</h1>
        // </>
        <div
            key={store.id}
            className="card text-center mb-3"
            style={{ width: "18rem", marginLeft: 20 }}
        >
            {console.log(store)}
            <div className="card-body">
                <h5 className="card-title">{store.name}</h5>
                <img src={shop} alt="shop" style={{ width: "14rem" }}></img>
                <p className="card-text"> <b>Store Detail</b> </p>
                <p className="card-text"> <b>id:</b> {store.id} </p>
                <p className="card-text"> <b>address:</b> {store.address} </p>
                <p className="card-text"> <b>nomor Siup:</b> {store.noSiup} </p>
                <p className="card-text"> <b>phone number:</b> {store.mobilePhone} </p>
                <div className='container justify-content-center align-items-center d-flex'>
                    <Link className="btn btn-outline-dark btn-m justify-content-center align-items-center d-flex m-3" 
                    to="/update/store" role="button">Update Store</Link>
                    <Link className="btn btn-outline-dark btn-m justify-content-center align-items-center d-flex m-3" 
                    to="/products" role="button">Delete Store</Link>
                </div>
            </div>  
        </div>
    )

  return (
    <div style={{backgroundColor:'white'}}>
        <h1 style={{textAlign:'center', fontWeight: 'lighter', color: 'black', fontFamily:''}}>STORE</h1>
        <br></br>
        <div className='row'>
            {console.log(storeList)}
            {storeCards}
        </div>
    </div>
  )
}

export default withLayout(Store)