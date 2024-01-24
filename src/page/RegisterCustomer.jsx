import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

function RegisterCustomer() {
  const url = "http://localhost:8081/api/auth/register";
  const logo = "public/assets/bag-heart-fill.svg";
  const eye = "public/assets/eye-fill.svg";

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("")

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleShowPass = () => {
    let input = document.getElementById("passinput");
    if (input.type === "password") input.type = "text";
    else input.type = "password";
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();

    if (name && username && password && phone && address && email) {
        axios
          .post(url, {
            username: username,
            password: password,
            fullName: name,
            mobilePhone: phone,
            address: address,
            email: email
          })
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful",
              text: res.data.message,
            });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: err,
              });
          });
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Empty Field",
            text: "Field cannot be empty",
          }); 
    }
  };

  return (
    <div>
      <section
        className="vh-120 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <div className="text-center my-5">
                      <img
                        src={logo}
                        alt="S_Logo"
                        width="100"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                      ></img>
                      <p>
                        <strong>SHOPEEMART</strong>
                      </p>
                    </div>
                    <h2 className="text-center mb-5">
                      Register
                    </h2>
                    <form>
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={handleNameChange}
                        />
                      </div>

                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Username
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleUsernameChange}
                        />
                      </div>

                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleEmailChange}
                        />
                      </div>

                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                      <div className="form-outline mb-4 input-group">
                        <input
                          type="password"
                          id="passinput"
                          className="form-control form-control-lg"
                          onChange={handlePasswordChange}
                        />
                        <span className="input-group-text" id="togglePass">
                          <img
                            src={eye}
                            onClick={handleShowPass}
                            style={{ cursor: "pointer" }}
                          ></img>
                        </span>
                      </div>

                      <label className="form-label" htmlFor="form3Example4cdg">
                        Your phone number
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="tel"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          onChange={handlePhoneChange}
                        />
                      </div>

                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Address
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleAddressChange}
                        />
                      </div>

                      <br></br>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
                          onClick={handleAddCustomer}
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Already have an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterCustomer;
