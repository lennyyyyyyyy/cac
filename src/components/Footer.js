import "./index.css"
import { useLocation } from 'react-router-dom';

export default function Footer() {
    return(<>
        <div className="footer-wrapper">
            <div className="footer">
                <a className="logo" href="/">
                    <img className="logo-img" src="b2n-logo-transparent.png" alt="Logo"/>
                    <span className="logo-dark">BACKTONATURE</span>
                </a>
                <nav>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/login">Login</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="signup">Sign Up</a></span>
                </nav>
            </div>
            {/* <div class="fader"></div> */}
        </div>
    </>)
}