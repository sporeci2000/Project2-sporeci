export default function LinksList({ links, onCopy }) {
    return (
        <div className="offer-section">
            <div className="container">

                {/* Only show the list if we have at least one link */}
                {links.length > 0 && (
                    <div className="links-part active">

                        {/* Loop through each link object in the links array */}
                        {links.map((link, i) => (
                            <div className="item" key={i}>

                                {/* Original URL */}
                                <p className="link">{link.original}</p>

                                {/* Shortened URL and Copy button */}
                                <div className="short-link">
                                    <p>{link.short}</p>
                                    <button
                                        className={`copy-btn ${link.copied ? "copied" : ""}`}
                                        onClick={() => onCopy(link.short, i)}
                                    >
                                        {/* Change button text if copied */}
                                        {link.copied ? "Copied!" : "Copy"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
