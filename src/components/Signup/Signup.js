import React, {useState} from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import {FaCheckCircle} from 'react-icons/fa'


const Signup = () => {
    return (
        <>
            <section className = "section">
                  <div className="row-1">
                   <div className="col-1">
                       <div className="title">
                       <h1>Sign Up <span>or</span> <Link to ='/Login'>Sign In</Link></h1>
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

                           <div className="input-3">
                                    <input type="checkbox" name="check" id="emails" />
                                <label>I’d like to receive special email offers and discounts</label>
                            </div>
                           
                            <div className="input-4">
                                    <input type="checkbox" name="check2" id="membership"/>
                                    <label>I agree to the terms of the <Link to ='/'>Membership Agreement</Link></label>
                            </div>

                            <div className="formfooter">
                                <button className="btn" id="btn">Continue</button>
                                <p>Already have an account? <Link to ='/Login'>Sign In</Link></p>
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

export default Signup
