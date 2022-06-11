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

## Deploy on Heroku

To deploy just be sure u have added the remote git to push, https://devcenter.heroku.com/articles/git and https://gist.github.com/randallreedjr/aa89e069371d07371882eea2df15fb4d is usefull doc

`Staging => https://git.heroku.com/stage-front-eucalypto.git`

`git remote add heroku https://git.heroku.com/stage-front-eucalypto.git `

or

`heroku git:remote -a stage-front-eucalypto`

and
`git push heroku`

To delete a remote git this is the command: `git remote remove heroku`
To list all the remotes git `git remote -v`

Is a good practice delete the cached files to avoid any problems, normally this is not nee

### Clearing build cache

if you want to clear cache first install `heroku plugins:install heroku-builds`
then use it:
`heroku builds:cache:purge -a stage-front-eucalypto`
you have to confirm typing the app name: `stage-front-eucalypto`

### Clearing All (Reseting Git)

if you want to clear all before an push, firs be sure to have heroku-repo plugin:
to install:
`heroku plugins:install heroku-repo`
then just reset:
`heroku repo:reset --app stage-front-eucalypto`
The app will remain working no problem, we just delete all the cache and files of the remote git of heroku

### Reseting current git

This is the same as a pull but better, will force to get all the files from git.

```
$ git gc --prune=now
$ git remote prune origin
```
