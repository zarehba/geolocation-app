# geolocation-app
Simple geolocation app developed with React.js and Material-UI:
* after landing on this application browsing user's IP with location details are displayed
* the search box below allows to look up the location details of provided URLs/IPs, e.g. *github.com*, *https://www.microsoft.com*, *140.82.121.3*
* location (according to latitude and longitude) is also visible on the map
* user can look up previous searches on the history search panel on the left
* session lives as long as the browser tab in which the app was opened
* the app is responsive and should look good on every device size

-----
### DEMO: http://geolocationapp.surge.sh/
-----

### CAVEATS - IF YOU SEE AN ERROR, READ BELOW:
**1**. the website **works only over HTTP** (the link above is correct) or via proxy (explanation below)

**2**. if you see the map and location details after landing but get "Network error" after searching an IP/URL, it might be an **issue of adBlock extensions** which seem to block my geolocation endpoint

**3**. if your browser autoredirects to HTTP and doesn't allow to visit a HTTP website, **you can view the application on a proxy website** \
   3.1. Visit a proxy website, e.g. https://www.proxysite.com/ \
   3.2. Type in the URL (can be with HTTPS): https://geolocationapp.surge.sh/ \
   3.3. Minimize proxy's banner ("Hide" button in the top-left corner) \
   3.4. Enjoy


### EXPLANATION
Since I developed the application locally, I didn't notice that both geolocation endpoints (*ipstack.com* and *ip-api.com*) are served over HTTP. \
Vercel, Netlify, Heroku, etc. serve websites only over HTTPS which made the app unable to make request to HTTP resources, due to [Mixed content policies](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content). \
HTTPS versions of both the endpoints are unfortunately available only in premium plans. \
Fortunately, https://surge.sh/ doesn't automatically enforce HTTPS.
