URL Shortener Web App
This project is a responsive URL shortener built with React. It allows users to paste any long URL and generate a short, shareable link using the Bitly API. The app stores shortened links in the browser’s localStorage, ensuring they remain available even after refreshing the page. It features a sleek user interface with a mobile-friendly hamburger menu, a statistics section, and smooth copy-to-clipboard functionality for quick sharing.

The app is built from different parts:
Header – Shows the logo, menu links, and a hamburger menu for mobile.
Hero – A welcome section with a big message and button to start shortening links.
Shortener – The form where you paste your link to shorten it.
LinksList – Shows your shortened links and lets you copy them with one click.
Statistics – Shares some highlights and information about the app.
BoostLinks – A call-to-action section encouraging users to shorten more links.
Footer – Links, social icons, and extra info at the bottom of the page.

The most challenging parts for me were getting localStorage to work properly so links stayed after refresh, and styling some parts of the page so they looked right on different devices. These challenges helped me learn more about how React state, effects, and CSS work together.

REFERENCES:
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify   
https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText   
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status   
https://react.dev/reference/react/useEffect   
https://react.dev/reference/react/useState   
