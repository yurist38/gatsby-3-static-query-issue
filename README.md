# gatsby-3-static-query-issue

Reproduction of the issue with `useStaticQuery` in Gatsby 3 + Nelify CMS setup

## How to reproduce:

1. `npm ci` - installing dependencies
2. `npm run develop` - running the dev server
3. Go to `http://localhost:8000`, you should see a modal box with the error message `Unhandled Runtime Error`

Now if you go to the `src/pages/index.ts` file and change something, after refreshing the page error should disappear (but it will be back at some point).
