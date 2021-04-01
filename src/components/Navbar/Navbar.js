import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(true)
    const handleClick =()=> setClick(!click)
     return (
        <>
           <header>
                <div className="wrapper">
                    <div className="col-3">
                    <Link to='/' className="navbar-logo">
                        <img src="/img/logo.png" className="logo" alt =""/>
                        </Link>
                    </div>
                    <div className="col-4">
                    <Link to ='/' className = 'link'>Join our Pro Network</Link>
                    <div className="dropdown" onClick = {handleClick}>
                    {click ? <FaBars size={30} className = "icon"/> : <FaTimes className = "icon" size={30} />}
                    <div className = {click ? 'dropdown-content' : 'show'}>
                            <Link to ='/Signup' className = 'dropdown-link'>Join For Free</Link>
                            <Link to ='/Login'  className = 'dropdown-link'>Sign In</Link>
                            <Link to ='/services'  className = 'dropdown-link'>Services Near Me</Link>
                            <Link to ='/localpros'  className = 'dropdown-link'>Local Pros</Link>
                            <Link to ='/articles'  className = 'dropdown-link'>Articles and Advice</Link>
                    </div>
                    </div>
                    </div>
                </div>
            </header>

            

            
        </>
    )
}

export default Navbar
