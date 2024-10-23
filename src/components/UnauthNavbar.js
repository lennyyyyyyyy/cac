import "./index.css"
import { useLocation } from 'react-router-dom';

export default function UnauthNavbar() {
    const location = useLocation();
    const darkBG = ["/login", "/signup"]
    const logoClass = () => {
        return darkBG.includes(location.pathname) ? 'logo-text logo-light' : 'logo-text logo-dark';
    }
    const logoImg = () => {
        return darkBG.includes(location.pathname) ? '/b2n-logo-light2.png' : '/b2n-logo-transparent.png';
    }

    return(<>
        <div className="nav-wrapper">
            <header>
                <a className="logo" href="/">
                    <img className="logo-img" src={logoImg()} alt="Logo"/>
                    <span className={logoClass()}>BACKTONATURE</span>
                </a>
                <nav>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/login">Login</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/signup">Sign Up</a></span>
                </nav>
            </header>
            {/* <div class="fader"></div> */}
        </div>
    </>)
}