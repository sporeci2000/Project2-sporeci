import { useState } from "react";

//The Header component contains the site logo, navigation menu, and mobile menu toggle
export default function Header() {
    //state variable to track if the mobile menu is visible
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className="logo-nav">

                    {/* Logo and main navigation links */}
                    <div className="nav-left">
                        <img src="/images/logo.svg" alt="logo" />
                        <ul className="nav-menu">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>

                    {/* Right side: Login and Sign Up buttons for desktop view */}
                    <div className="desktop-login-buttons">
                        <a href="#" className="login-link">Login</a>
                        <a href="#" className="signup-link">Sign Up</a>
                    </div>

                    {/* Hamburger menu button for mobile view
                        When clicked, it toggles menuOpen between true and false */}
                    <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </nav>

                {/* mobile menu is visible (true) */}
                {menuOpen && (
                    <div className="mobile-menu show">
                        <ul className="nav-menu">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                        <hr />
                        <div className="mobile-login-buttons">
                            <a href="#" className="mobile-login-link">Login</a>
                            <a href="#" className="mobile-signup-link">Sign Up</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
