import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

const CreateProduct = () => {
  const url = "http://localhost:8081/api/v1/products";
  const logo = "/assets/bag-heart-fill.svg";
  const token = localStorage.getItem("token")

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [storeId, setStoreId] = useState("");

  const navigate = useNavigate();

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleStoreIdChange = (e) => {
    setStoreId(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (productName && description && price && stock && storeId) {
      axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
      axios
        .post(url, {
          description: description,
          price: price,
          productName: productName,
          stock: stock,
          storeId: storeId
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Product Registration Successful",
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
            'url("/assets/products-bg.jpg")',
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
                    <h2 className="text-center mb-5">Create Product</h2>
                    <div className='container justify-content-center align-items-center d-flex'>
                        <Link className="btn btn-outline-dark btn-lg justify-content-center align-items-center d-flex" 
                        to="/products" role="button">Check Product List</Link>
                    </div>
                    <br></br>
                    <form>
                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Product name
                        </span>
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          onChange={handleProductNameChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Price - Rp.
                        </span>
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handlePriceChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Description
                        </span>
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleDescriptionChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Stock
                        </span>
                        <input
                          type="tel"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          onChange={handleStockChange}
                        />
                      </div>

                      <div className="form-outline mb-4 input-group">
                        <span className="input-group-text" id="togglePass">
                          Store ID
                        </span>
                        <input
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          onChange={handleStoreIdChange}
                        />
                      </div>

                      <br></br>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={handleAddProduct}
                        >
                          Register Product
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
  );
};

export default CreateProduct  ;
