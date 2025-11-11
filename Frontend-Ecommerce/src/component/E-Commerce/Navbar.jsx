import React from 'react';
import { NavLink} from 'react-router-dom';
import './E-Commerce.css'
function Navbar(props) {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-heading'>
                        <NavLink className='navlink' to='/'>CartKaro</NavLink>
                </div>
                <div className="navbar-item">
                    <ul>
                        <NavLink className='navlink'  to='/'>Home</NavLink>
                        <NavLink className='navlink' to='/about'>About</NavLink>
                        <NavLink className='navlink' to='/contact'>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-button">
                    <button className="navbar-signup"><NavLink className='navlink' to='/signup'>SignUp</NavLink></button>
                    <button className="navbar-login"><NavLink className='navlink' to='/login'>Login</NavLink></button>
                </div>
            </div>
        </>
    );
}

export default Navbar;