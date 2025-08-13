export default function Statistics() {
    return (
        <section className="offer-section">
            <div className="container services-offered">
                {/* Title and description */}
                <div>
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>

                {/* Cards showing features */}
                <div className="cards">
                    <div className="card">
                        <img className="card-icon" src="/images/icon-brand-recognition.svg" alt="brand recognition" />
                        <h3>Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.</p>
                    </div>
                    <div className="card">
                        <img className="card-icon" src="/images/icon-detailed-records.svg" alt="detailed records" />
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>
                    <div className="card">
                        <img className="card-icon" src="/images/icon-fully-customizable.svg" alt="fully customizable" />
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}