import "./index.css"
// import { useLocation } from 'react-router-dom';

export default function Footer() {
    return(<>
        <div className="footer-wrapper">
            <div className="footer">
                <a className="logo" href="/">
                    <img className="footer-logo-img" src="/b2n-logo-transparent.png" alt="Logo"/>
                    <span className="footer-logo-text logo-dark">BACKTONATURE</span>
                </a>
                <footer>
                    <span className="footer-not-bottom footer-header">Pages</span>
                    <span className="footer-not-bottom"><a className="footer-link" href="/aboutus">About Us</a></span>
                    <span><a className="footer-link" href="/recycling">Recycling</a></span>
                </footer>
            </div>
            {/* <div class="fader"></div> */}
        </div>
    </>)
}