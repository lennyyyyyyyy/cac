import "./index.css"
import { useLocation } from 'react-router-dom';

export default function UnauthNavbar() {
    const location = useLocation();

    const darkBG = ["/login", "/signup", "/editprofile"]

    const logoClass = () => {
        return darkBG.includes(location.pathname) ? 'logo-text logo-light' : 'logo-text logo-dark';
    }

    return(<>
        <div className="nav-wrapper">
            <header>
                <a className="logo" href="/">
                    <span class={logoClass()}>BackToNature</span>
                </a>
                <nav>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/login">Login</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="signup">Sign Up</a></span>
                </nav>
            </header>
            {/* <div class="fader"></div> */}
        </div>
    </>)
}