# Code for Tutorial: How to load data from a file in Next.js
You can find the tutorial [here](https://vercel.com/guides/loading-static-file-nextjs-api-route)
## Purpose
Sometimes, you have data that will not change regularly and that will be used by multiple pages in your site. This is often stored in `json` format in static files. You could load them directly from your front-end with a `GET` request by exposing these files to the application's public folder. However, you may not want to do that for security reasons. A possible solution is to:

- Store your `json` files in a private folder inside your application
- Construct an API endpoint to load these files using the file system
- Connect to the API endpoint in your front-end and display the data

## Running the Code

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Support

For Support, please contact us using this link: https://vercel.com/help
