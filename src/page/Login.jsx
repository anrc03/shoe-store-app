import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import withLoading from '../hoc/Loading';
// import { setLogin } from '../redux/authSlice';

const Login = () => {

    const logo = "public/assets/bag-heart-fill.svg"

    const url = 'http://localhost:8081/api/auth/login';

    const [username, setUsername] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post(url, {
            username: username,
            password: passwordInput
        })
        .then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.data.token)
            localStorage.setItem("role", res.data.data.role)
            localStorage.setItem("username", username)
            res.data.data.role === "ROLE_ADMIN" ? navigate("/home/admin") : navigate("/");
            } 
        )
        .catch((err) => {
            console.log(err)
            window.alert("Wrong Combination")
        })
    }

  return (
    <div className="vh-120 bg-image" style={{
        backgroundImage:
        'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'
    }}>
        <div className="vh-100">
        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="text-center my-5">
                        <img src={logo} alt="S_Logo" width="100" style={{cursor: "pointer"}} onClick={() => navigate("/")}></img>
                        <p><strong>SHOPEEMART</strong></p>
                    </div>
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4 text-center">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="mb-2 text-muted">Username</label>
                                    <input type="text" onChange={handleUsernameChange} htmlFor="email" className="form-control" placeholder='Enter your username' required autoFocus></input>
                                    {/* <div className="invalid-feedback">Email is invalid</div> */}
                                </div>
                                <br></br>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label htmlFor="password" className="mb-2 text-muted">Password</label>
                                        {/* <a href="forgot.html" className="float-end">Forgot Password?</a> */}
                                    </div>
                                    <input type="password" onChange={handlePasswordChange} htmlFor="password" className="form-control" placeholder='Enter your password' name="pass" required autoFocus></input>
                                    {/* <div className="invalid-feedback">Password must be filled</div> */}
                                </div>

                                <div className="d-flex align-item-center" >
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" className="form-check-input" id="remember"></input>
                                        <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-item-center mt-3">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Don't have an account? <Link to="/register" className="text-dark">Create One</Link>
                            </div>
                        </div>

                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2024 &mdash; Shopemart
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login 