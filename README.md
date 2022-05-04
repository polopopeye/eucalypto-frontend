# Git Commons errors

idk why git sometimes use ignore the config of camel case by default this can trigger in some errors on deployment but working in other enviroments. to disable that and avoid this problems just update git config to:

```
$ git config --global core.ignorecase false
$ git config core.ignorecase false
```

and make some lint commits to check all works properly

commmands:
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "npx prettier --check",
"format": "npx prettier --write",
"prepare": "husky install",
"test:unit": "jest",
"test:int": "cypress open"

    dev => dev enviroment
    build => static build for deploy
    start => static serve for deploy
    lint => check linter
    format => format linter
    prepare =>  git hook to execute husky and format
    test:unit => execute unit testing enviroment JEST for components
    test:unit:dev => dev enviroment, will trigger unit testing on change files
    test:int => execute integration testing enviroment CyPress for components
    test:int:dev => dev enviroment, will trigger integration testing on change files

Utilities:

Firestore (Firebase) => Install cli to loginand allow deploy => npm install -g firebase-tools
firebase login
firebase deploy

Tailwind

// react-bubble-ui https://github.com/blakesanie/React-Bubble-UI

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
