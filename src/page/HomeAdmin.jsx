import React from 'react'
import { Link } from 'react-router-dom'
import withLayout from '../hoc/Layout'

const HomeAdmin = () => {

    const username = localStorage.getItem("username");

  return (
    <div>
        <div className='row justify-content-center align-items-center d-flex'>
            <div className='container justify-content-center align-items-center d-flex'>
                <h2>Hey there, <span style={{backgroundColor:"skyblue", borderRadius:"15px"}}>{username}</span>!</h2>
            </div>
            
            <div className='container justify-content-center align-items-center d-flex'>
                <h3>What would you like to do today?</h3>
            </div>
            <div className='row justify-content-center align-items-center d-flex mt-lg-5'>
                <center><h3>CREATE</h3></center>
                <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:20}} 
                to="/create/store" role="button">Create Store</Link>
                <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:20}}
                to="/create/product" role="button">Create Product</Link>
            </div>
            <div className='row justify-content-center align-items-center d-flex mt-lg-5'>
            <center><h3>UPDATE</h3></center>
            <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:20}}
                to="/update/store" role="button">Update Store</Link>
            </div>
            <div className='row justify-content-center align-items-center d-flex mt-lg-5'>
            <center><h3>DELETE</h3></center>
            <center><p>Note: can only delete store with no product linked</p></center>
            <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:20}}
                to="/stores" role="button">Delete Store</Link>
            </div>
        </div>
    </div>
  )
}

export default withLayout(HomeAdmin) 