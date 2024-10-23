import "./index.css"
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react'
import { useAuth } from '../AuthProvider';

export default function UnauthNavbar() {
    const location = useLocation();
    const darkBG = ["/editprofile"]
    const logoClass = () => {
        return darkBG.includes(location.pathname) ? 'logo-text logo-light' : 'logo-text logo-dark';
    }
    const logoImg = () => {
        return darkBG.includes(location.pathname) ? '/b2n-logo-light2.png' : '/b2n-logo-transparent.png';
    }

    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return(<>
        <div className="nav-wrapper">
            <header>
                <a className="logo" href="/">
                    <img className="logo-img" src={logoImg()} alt="Logo"/>
                    <span className={logoClass()}>BACKTONATURE</span>
                </a>
                <nav>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/journal">Journal</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/posts">Forum</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/profile">Profile</a></span>
                    <span className="nav-link-wrapper"><div className="nav-link" onClick={handleLogout}>Logout</div></span>
                </nav>
            </header>
            {/* <div class="fader"></div> */}
        </div>
    </>)
}