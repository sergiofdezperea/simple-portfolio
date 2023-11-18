# Simple portfolio

### Description

The idea of this project is to make a simple clean portfolio.

It will load some Json that contain the texts used in the web in different languages.

At the moment this project is deployed at wit github pages: https://sergiofdezperea.github.io/

## Deploy at Github pages

Since this is a react project it don't work directly with Github pages.

First we add the remote repository

```bash
git remote add origin [your github repository]
git branch -M main
git push -u origin main
```

Then in vite.config.js

```javascript
export default defineConfig({
  /* --- Other configurations --- */
  base: "[Link for your web]",
  /* --- Other configurations --- */
})
```

Install gh-pages

```bash
npm i --save-dev gh-pages
```

In package.json

```json
"scripts": {
    /* --- Other configurations --- */
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
```

Deploy the project

```bash
npm run deploy
```
