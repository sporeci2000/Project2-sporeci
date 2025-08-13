export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero">

                {/* Welcome text and call-to-action */}
                <div className="welcome-part">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <button className="first-btn">Get Started</button>
                </div>

                {/* Illustration image */}
                <div className="first-img">
                    <img src="/images/illustration-working.svg" alt="working" />
                </div>
            </div>
        </section>
    );
}
