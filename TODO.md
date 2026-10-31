# district24-website To Do list

| No. | Title | Who | Status | Link |
|-----|-------|-----|--------|------|
| 1 | Add links to our Google Drive | Mike | Open | [details](#task-1) |
| 2 | Switch the build process from esbuild over to Astro (https://astro.build/) | Jon | Open | [details](#task-2) |
| 3 | Consider using Google Sheets as a simple CMS as an alternative to data.js | Mike | Open | [details](#task-3) |
| 4 | Automatically build and deploy the website when main is merged | Jone | Open | [details](#task-4) |

<a id="task-1"></a>
### Task 1: Add links to our Google Drive

Lots of good infor in our Google Drive that we should provide direct links to.

<a id="task-2"></a>
### Task 2: Switch the build process from esbuild over to Astro

This will compile the site using the SSG strategy (Static Site Generated) instead of CSR (Client Side Rendering), which will produce faster load times and better search engine optimization. Each page will be able to have its own meta tags for better searchability. If you "view-source" on the current site, its just an empty HTML file that loads the JavaScript bundle and renders the site. With SSG, it would look much more like a traditional website, the full HTML would be there without any JavaScript rendering.

<a id="task-3"></a>
### Task 3: Consider using Google Sheets as a simple CMS

Currently, any updates to Workshops or Meetings will require a code update and deployment from a developer. This could be changed to a Google Sheet, where we could just add or update a row, and the data would be immediately reflected on the site. We can talk about this more on Thursday.

<a id="task-4"></a>
### Task 4: Automatically build and deploy on merge to main

You can keep using AWS Amplify, but I would recommend Netlify for simplicity (https://www.netlify.com/), which is free for open-source projects like this and will keep SSL and a custom domain on the free tier. Any time code is merged into the main branch, the website will automatically build and deploy. The reason I like Netlify is that it's a 1-click integration with GitHub, whereas with AWS you need to manage a service account and store the credentials in GitHub actions. Doable, but just longer setup with more things to manage.
