# district24-website To Do list

### Add links to our Google Drive

### Switch the build process from esbuild over to Astro (https://astro.build/)

This will compile the site using the SSG strategy (Static Site Generated) instead of CSR (Client Side Rendering), which will produce faster load times and better search engine optimization. Each page will be able to have its own meta tags for better searchability. If you "view-source" on the current site, its just an empty HTML file that loads the JavaScript bundle and renders the site. With SSG, it would look much more like a traditional website, the full HTML would be there without any JavaScript rendering.

### Consider using Google Sheets as a simple CMS as an alternative to data.js (https://github.com/mike-mke/district24-website/blob/main/src/data.js)

Currently, any updates to Workshops or Meetings will require a code update and deployment from a developer. This could be changed to a Google Sheet, where we could just add or update a row, and the data would be immediately reflected on the site. We can talk about this more on Thursday.

### Automatically build and deploy the website when main is merged.

You can keep using AWS Amplify, but I would recommend Netlify for simplicity (https://www.netlify.com/), which is free for open-source projects like this and will keep SSL and a custom domain on the free tier. Any time code is merged into the main branch, the website will automatically build and deploy. The reason I like Netlify is that it's a 1-click integration with GitHub, whereas with AWS you need to manage a service account and store the credentials in GitHub actions. Doable, but just longer setup with more things to manage.
