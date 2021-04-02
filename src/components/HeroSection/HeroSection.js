import React, {useState}from 'react'
// import { Link } from 'react-router-dom'
import './HeroSection.css'
import {db} from '/Users/tywayne/NodeDev/homestars/src/util/firebase.js'

const HeroSection = ({img,mainTitle}) => {
    const [title,setTitle] = useState('');
    const handleChange = (e) =>{
        setTitle(e.target.value);
    }

    const createTitle = (e) =>{
        db.collection('testing').add({
            title:title
        }).then(() =>{
            alert("Submitted " + title)
        }).catch((error) => {
                alert(error.message);
        })
        setTitle('');  
    }

    return (
        <>
            <div className = "container">
             <img src={img} className = "banner__img" width = "1150" height ="500" alt=" A man laying down"/>
            <div className="info">
                <h1>{mainTitle}</h1>
                    <div className="search">
                        <input type="text" placeholder="What can we help you with today" onChange =
                        {handleChange} value ={title}/>
                        <div className="button">
                        <button className="btn" onClick = {createTitle}>Search</button>
                    </div>         
            </div>
            </div>
            </div>
           
        </>
    )
}

export default HeroSection

