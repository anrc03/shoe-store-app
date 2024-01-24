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
            <div className='container justify-content-center align-items-center d-flex'>
                <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:140}} 
                to="/create/store" role="button">Create Store</Link>
                <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" style={{width:200, height:100, margin:140}}
                to="/create/product" role="button">Create Product</Link>
            </div>
            
        </div>
    </div>
  )
}

export default withLayout(HomeAdmin) 