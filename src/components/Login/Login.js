import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { FaCheckCircle } from 'react-icons/fa'
import { fire } from '/Users/tywayne/NodeDev/homestars/src/util/firebase.js'

const Login = () => {
    
    return (
        <>
            <section className = "section">
                  <div className="row-1">
                   <div className="col-1">
                       <div className="title">
                       <h1>Sign In <span>or</span> <Link to ='/Signup'>Sign Up</Link></h1>
                       </div>
                       <div className="form">
                           <div className="signupForm">
                           <div className="input-1">
                                    <label for ="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                    <p id="errEmail"></p>
                            </div>
                            <div className="input-2">
                                    <label for ="password">Password</label>
                                    <input type="password" name="password" id="password" />
                                    <p id="errPass" className="errPass"></p>
                                </div>
                           </div>
                           <div className="formfooter">
                                <button type="button" className="btn" id="btn" >Sign In</button>
                                <div className="login">
                                    <span>< Link to ='/'>Send Sign In Link </Link></span> | <Link to ='/'>Forget Password</Link> | 
                                    <Link to ='/'>Don't have a Password</Link>
                                </div>
                               
                            </div>
                       </div>
                   </div>

                   <div className="col-2">
                   <div className="title-2">
                        <h1>Rubi makes it easy to do more for your home</h1>
                    </div>
                    <div className ="list">
                     
                            <p><FaCheckCircle className = 'fa-check-circle'/>Access to highly rated pros nationwide</p>
                            <p><FaCheckCircle className = 'fa-check-circle'/>More than 10 million verified reviews</p>
                            <p><FaCheckCircle className = 'fa-check-circle'/>Savings on service with deals and offers from local pros</p>
                            <p> <FaCheckCircle className = 'fa-check-circle'/>Thousands of how-to, DIY and expert-sourced articles</p>
                        
                    </div>
                   </div>
               </div>
        </section>
          
        <footer>
        <div className="footer">
            <div className="content">
                © Copyright 1995-2021, Rubi. All Rights Reserved. | <Link to ='/'>Terms of Use</Link> | <Link to='/'>Privacy Policy</Link> | 
                <Link to='/'>California Privacy</Link>
            </div>

        </div>
    </footer>
         
        </>
    )
}

export default Login
