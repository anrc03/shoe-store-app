import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateStore = () => {

    const url = "http://localhost:8081/store";
    const logo = "/assets/bag-heart-fill.svg";
    const token = localStorage.getItem("token")

    const[storeId, setStoreId] = useState("");
    const [storeName, setStoreName] = useState("");
    const [noSiup, setNoSiup] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleIdChange = e => setStoreId(e.target.value)
    const handleNameChange = e => setStoreName(e.target.value);
    const handleNoSiupChange = e => setNoSiup(e.target.value);
    const handleAddressChange = e => setAddress(e.target.value);
    const handlePhoneChange = e => setPhone(e.target.value)
    
    const handleUpdateStore = (e) => {
        e.preventDefault();
    
        if (storeName && noSiup && address && phone) {
          axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
          axios
            .put(url, {
                id: storeId,
                noSiup: noSiup,
                name: storeName,
                address: address,
                mobilePhone: phone

            })
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Store Updated Successfuly",
                text: res.data.message,
              });
            })
            .catch((err) => {
              console.log(err);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: err,
              });
            });
        } else {
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
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("/assets/shopping.jpg")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-60">
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
                    <h2 className="text-center mb-5">Update Existing Store</h2>
                    <div className='container justify-content-center align-items-center d-flex'>
                        <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" 
                        to="/stores" role="button">Check Store List</Link>
                    </div>
                    <br></br>
                    <form>
                    <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Store ID
                        </span>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={handleIdChange}
                          placeholder='You can check store id from store list'
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Store name
                        </span>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={handleNameChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          No. Siup
                        </span>
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleNoSiupChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Address
                        </span>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleAddressChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Phone Number
                        </span>
                        <input
                          type="tel"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          onChange={handlePhoneChange}
                        />
                      </div>
                      <br></br>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={handleUpdateStore}
                        >
                          Update Store
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateStore