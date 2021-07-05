import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="login__container">
            <div className="login">
                <div className="login__Signup">
                    <div className="login__logo">
                        <img className="login__img" src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" alt="" />
                        <div className="login__location">
                            <h1>Too Tired to make Dinner</h1>
                            <h1>Too lazy to dine outside</h1>
                            <h2>Order food from favourite restaurants near you.</h2>
                            <input className="inp" placeholder="Enter Your Location"></input>
                            <button className="find__button">FIND FOOD</button>
                        </div>
                    </div>
                    <div className="login__buttons">
                        <Link to="/login">
                            <button className="logIn">Log In</button>
                            <button className="signUP">Sign Up</button>
                        </Link>
                    </div>    
                </div>
                 <div className="login__image">
                    <img className="image" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Dinner2-new_rtkwqw" alt="" />
                </div> 
            </div>
            <div className="bottom">
                <div className="bottom_img1">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
                    <h3>No Minimum Order</h3>
                </div>
                <div className="bottom_img2">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
                    <h3>Live Order Tracking</h3>
                </div>
                <div className="bottom_img3">
                    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="" />
                    <h3>Lightning Fast Delivery</h3>
                </div>
            </div>
        </div>
    )
}

export default Login
