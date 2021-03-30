import React from 'react'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
    return (
        <>
            <section>
            <img src="./img/banner-1.jpeg" class = "banner__img" width = "1150" height ="500" alt=" A man laying down"/>
            <div className="info">
                <h1>Your home for <br/> everything home</h1>
            </div>
            </section>
        </>
    )
}

export default HeroSection
