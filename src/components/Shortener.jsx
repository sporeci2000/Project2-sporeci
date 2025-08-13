import { useState } from "react";


//function passed from the parent to add a new link to the list
export default function Shortener({ onAddLink }) {
    const [url, setUrl] = useState("");

    //stores any error message to display to the user
    const [error, setError] = useState("");


    //Function to check if a URL is valid
    function isValidUrl(link) {
        try {

            //Add https:// if the user didn't type it
            new URL(link.startsWith("http") ? link : "https://" + link);
            return true;
        } catch {
            return false;
        }
    }


    //Function that runs when the user clicks "Shorten It!"
    async function handleShorten() {

        //Check if the input is empty or invalid
        if (!url || !isValidUrl(url)) {
            setError("Please add a valid link");
            return;
        }
        setError("");

        try {

            //Send POST request to Bitly API
            const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                    //Authorization token for Bitly AP
                    Authorization: "Bearer b2218ef7143d1499949570a10c1ed1b57d5c04a3",
                },
                body: JSON.stringify({

                    //Ensure the URL starts with http or https
                    long_url: url.startsWith("http") ? url : "https://" + url,
                }),
            });


            //If API request is successful
            if (res.ok) {
                const data = await res.json();

                //Call parent's onAddLink function with the original and shortened link
                onAddLink({ original: url, short: data.link });

                //Clear the input field
                setUrl("");
            } else {
                setError("Error shortening URL");
            }
        } catch {
            setError("Network error");
        }
    }

    return (
        <div className="input-section">
            <div className="container url-container">

                {/* Text input for the user to enter a link */}
                <input
                    type="text"
                    placeholder="Shorten a link here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}

                    //Add "error" class if there's an error message
                    className={error ? "error" : ""}
                />

                {/* Show an error message if validation fails or API call fails */}
                {error && <p className="error-message error">{error}</p>}

                {/* Button that triggers the handleShorten function */}
                <button className="second-btn" onClick={handleShorten}>
                    Shorten It!
                </button>
            </div>
        </div>
    );
}
