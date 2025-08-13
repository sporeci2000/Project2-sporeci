
//It contains the logo, navigation links, and social media icons
export default function Footer() {
    return (
        <footer>
            <div className="container footer-part">

                {/* Logo section at the bottom */}
                <div className="bottom-logo">
                    <img src="/images/logo.svg" alt="logo" />
                </div>

                {/* First footer section: Features links */}
                <div className="footer-section">
                    <ul className="links-list">
                        <li className="containers">Features</li>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>

                {/* Second footer section: Resources links */}
                <div className="footer-section">
                    <ul className="links-list">
                        <li className="containers">Resources</li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                {/* Third footer section: Company links */}
                <div className="footer-section">
                    <ul className="links-list">
                        <li className="containers">Company</li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Fourth footer section: Social media icons */}
                <div className="footer-section">
                    <a href="#"><img src="/images/icon-facebook.svg" alt="fb" /></a>
                    <a href="#"><img src="/images/icon-twitter.svg" alt="twitter" /></a>
                    <a href="#"><img src="/images/icon-instagram.svg" alt="insta" /></a>
                    <a href="#"><img src="/images/icon-pinterest.svg" alt="pinterest" /></a>
                </div>
            </div>
        </footer>
    );
}
