import React from 'react'
import withLayout from '../HOC/Layout'
import { Link } from 'react-router-dom'


const Hero = () => {


  return (
    <div>
        <img src='/assets/shoes.jpg' alt='Shoes' style={{float:'right', position:'relative', width:1850}}></img>
        {/* <div style={{position:'absolute', left:50/100, fontSize: 50, fontWeight:'bold', color:'grey'}}>WELCOME TO SHOPEMART</div> */}
        <div style={{position:'absolute', fontSize:80, fontWeight: 'bold', color: 'slategrey',
                    fontFamily:'serif', justifyContent: 'space-between', 
                    marginTop:290, marginLeft:90}}>Start<br/>Shopping<br/>with<br/>Us</div>
        <Link className="btn btn-outline-dark btn-lg" style={{position:'absolute', marginTop:780, marginLeft:90, fontSize:30, fontWeight:'bold'}} to="/products" role="button">Let's Shop</Link>
    </div>
  )
}

export default withLayout(Hero)