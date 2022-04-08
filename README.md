# MERN Travel Tours App

https://github.com/coding-to-music/mern-travel-tours-app

https://mern-travel-tours-app.herokuapp.com/

## About

An awesome tour booking application by using Node.js, Express.js, MongoDB, Mongoose, pug, and many more packages.

By Mehedi Islam Ripon MehedilslamRipon https://github.com/MehedilslamRipon

https://xerox-tour.herokuapp.com/

https://github.com/MehedilslamRipon/Tours-Application

## Installation:

### Scripts

```java
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "prod": "pm2-runtime start ecosystem.config.js --env production",
    "data:import": "node dev-data/data/import-dev-data.js  --import",
    "data:delete": "node dev-data/data/import-dev-data.js  --delete",
    "start:prod": "NODE_ENV=production nodemon server.js",
    "watch:js": "parcel watch ./public/js/index.js --out-dir ./public/js --out-file bundle.js",
    "build:js": "parcel build ./public/js/index.js --out-dir ./public/js --out-file bundle.js",
    "deploy": "git add . && git commit -m Heroku && git push && git push heroku"
```

### GitHub

```java
 nvm install v16
 npm install
 git init
 git add .
 git remote remove origin
 git commit -m "first commit"
 git branch -M main
 git remote add origin git@github.com:coding-to-music/mern-travel-tours-app.git
 git push -u origin main
```

### Heroku

```java
heroku create mern-travel-tours-app
```

### Heroku MongoDB Environment Variables

```java
heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/mern-travel-tours-app?retryWrites=true&w=majority"
git push heroku
```

```java
DATABASE_PASSWORD=""
YOUR_EMAIL_NAME=""
YOUR_EMAIL_ADDR=""
EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""
STRIPE_SECRET_KEY=""
JWT_SECRET=""
JWT_COOKIE_EXPIRES_IN=""
JWT_EXPIRES_IN=""

```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on mern-travel-tours-app will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== mern-travel-tours-app Buildpack URLs
1. mars/create-react-app
2. heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-03-29T08:06:58.791397+00:00 heroku[web.1]: Starting process with command `npm start`
2022-03-29T08:06:59.934025+00:00 app[web.1]: ls: cannot access '/client/build/static/js/*.js': No such file or directory
2022-03-29T08:06:59.938326+00:00 app[web.1]: Error injecting runtime env: bundle not found '/client/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=/client/build/static/js/*.js
```

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```

### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
# Always change directory, first
cd react-ui/

npm install package-name --save
```
