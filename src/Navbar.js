import React,{useState,useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
const[show,setShow]=useState(false);

useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    });

    return()=>{
        window.removeEventListener("scroll");
    }
},[]);

    return (
        <div className={`navbar ${show && 'navbar-black'}`}>
            <img src='/n-clone.png' className='navbar-logo' alt='netflix-clone logo'/>
            <img src='/avatar.png' className='navbar-avatar' alt='avatar-logo'/>
        </div>
    )
}

export default Navbar
