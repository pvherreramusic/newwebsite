import React from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#333', color: '#fff', position: 'fixed', top: 0, left: 0, right: 0 }}>
            <Link to="home" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                Home
            </Link>
            <Link to="bio" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                Bio
            </Link>
            <Link to="newcontent" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                New Content
            </Link>
            <Link to="music" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                Music/Downaloads
            </Link>
            <Link to="videos" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                Videos
            </Link>
            <Link to="contact" smooth={true} duration={100} style={{ cursor: 'pointer', color: 'white' }}>
                Contact
            </Link>

        </nav>
    );
};




export default Navbar;