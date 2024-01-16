import React, { Component } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';

const Navbar = () => {

    const state = useSelector((state) => state.cart.cartItem);

        return (
        <div>  
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div className="container-fluid">
                    <button
                    data-mdb-collapse-init
                    className="navbar-toggler"
                    type="button"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img src="/assets/bag-heart-fill.svg" height="40" alt="S Logo" loading="lazy"></img>
                        </Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link style={{fontWeight: 'bolder'}} className="nav-link" to="/"><strong>SHOPEMART</strong></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        </ul>
                        <span className='navbar-text'><Link className="nav-link" to="/login">Login</Link></span>
                        <Link to='/cart'>
                        <img src="/assets/cart.svg" style={{marginLeft: 25}} height="20" alt="Cart" loading="lazy"></img>
                        ({state.length})
                        </Link>
                    </div>
                    </div>
                </nav>
                <Outlet />
        </div>
        )
    }
    
  

export default Navbar
