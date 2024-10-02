import "./index.css"

export default function UnauthNavbar() {
    return(<>
        <div className="nav-wrapper">
            <header>
                <a className="logo" href="/">
                    <span className="logo-text">BackToNature</span>
                </a>
                <nav>
                    <span className="nav-link-wrapper"><a className="nav-link" href="/login">Login</a></span>
                    <span className="nav-link-wrapper"><a className="nav-link" href="signup">Sign Up</a></span>
                </nav>
            </header>
            <div class="fader"></div>
        </div>
    </>)
}