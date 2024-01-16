import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const logo = "public/assets/bag-heart-fill.svg"

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let info = {
            email: "tes1@gmail.com",
            pass: "12345",
        }

        // console.log(emailInput)
        // console.log(passwordInput)

        if (emailInput == info.email && passwordInput == info.pass) navigate("/")
        else alert("Wrong Combination")
    }

  return (
    <div>
        <div className="h-100">
        <div className="container h-100">
            <div className="row justify-content-sm-center h-100">
                <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div className="text-center my-5">
                        <img src={logo} alt="S_Logo" width="100"></img>
                    </div>
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="mb-2 text-muted">Email Address</label>
                                    <input type="email" onChange={handleEmailChange} htmlFor="email" className="form-control" placeholder='tes1@gmail.com' required autoFocus></input>
                                    <div className="invalid-feedback">Email is invalid</div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label htmlFor="password" className="mb-2 text-muted">Password</label>
                                        <a href="forgot.html" className="float-end">Forgot Password?</a>
                                    </div>
                                    <input type="password" onChange={handlePasswordChange} htmlFor="password" className="form-control" placeholder='12345' name="pass" required autoFocus></input>
                                    <div className="invalid-feedback">Password must be filled</div>
                                </div>

                                <div className="d-flex align-item-center">
                                    <div className="form-check">
                                        <input type="checkbox" name="remember" className="form-check-input" id="remember"></input>
                                        <label htmlFor="remember" className="form-check-label">Remember Me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary ms-auto">Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer py-3 border-0">
                            <div className="text-center">
                                Don't have an account? <a href="register.html" className="text-dark">Create One</a>
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