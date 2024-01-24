import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const state = useSelector((state) => state.cart.cartItem);
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    // console.log(localStorage)

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        navigate("/login")
    }

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
                            <Link className="nav-link" to={role === "ROLE_ADMIN" ? "/home/admin" : "/"}>{role === "ROLE_ADMIN" ? "Admin Home" : "Home"}</Link>
                        </li>
                        {role === "ROLE_ADMIN" && 
                        <li className="nav-item">
                            <Link className="nav-link" to="/stores">Store</Link>
                        </li>}
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        </ul>

                        <span className='navbar-text'>
                            <button className="btn" onClick={() => navigate("/register/admin")}>
                                {!token && "Want to sell your own product?"}
                            </button>
                            <button className="btn" onClick={() => navigate("/register")}>
                                {!token && "Register"}
                            </button>
                            <button className="btn" onClick={token ? logout : () => navigate("/login")}>
                                {token ? "Logout" : "Login"}
                            </button>
                        </span>
                        <img src="/assets/cart.svg" style={{marginLeft: 25, cursor:"pointer"}} height="20" alt="Cart" loading="lazy" onClick={token ? () => navigate("/cart") : () => navigate("/login")}></img>
                        <div className='ms-0' style={{backgroundColor:"wheat", width:"18px", height:"18px", borderRadius:"50%", justifyContent:"center", alignItems:"center", display:"flex"}}>{state.length}</div>
                    </div>
                    </div>
                </nav>
                <Outlet />
        </div>
        )
    }
    
  

export default Navbar
