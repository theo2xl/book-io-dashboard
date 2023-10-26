# book-io-dashboard
The book-io-dashboard allows users to register, login, and select their favorite book from a list of books. The project VueJS, Nuxt, Tailwind and persists their choices through a REST API. It is also responsive and designed mobile-first so it is intended to look good on any device.

## Contents
- [book-io-dashboard](#book-io-dashboard)
  - [Contents](#contents)
  - [Provided API Endpoints](#provided-api-endpoints)
  - [Build Setup](#build-setup)
    - [`yarn`](#yarn)
    - [-- `OR` --](#---or---)
    - [`npm`](#npm)
  - [Using the Dashboard](#using-the-dashboard)

## Provided API Endpoints
The API repo can be found at: https://github.com/book-io/web-interview-project-signup-wizard. Make sure it is running first.

## Build Setup
### `yarn`
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```
### -- `OR` --
### `npm`
```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev
```
```bash
   ╭───────────────────────────────────────╮
   │                                       │
   │   Nuxt @ v2.17.2                      │
   │                                       │
   │   ▸ Environment: development          │
   │   ▸ Rendering:   client-side          │
   │   ▸ Target:      server               │
   │                                       │
   │   Listening: http://localhost:3000/   │
   │                                       │
   ╰───────────────────────────────────────╯
```

## Using the Dashboard

*  [Register](http://localhost:3000/register) an account
   *  Choose a username and a password
   *  The email has minimal validation, a@a.com will pass
   *  Don't worry about the email, I just added it so it looked different than the login page and it is not used during the `/login` process
*  Logged in? Great 👍 Let's pick your favorite book 📖
*  Once selected your favorite book will be highligted by a ⭐️ and will show in the first position of the list
*  Can't decide your favoirte book? No worries, select another book in case you change your mind
*  Logout and login again. Your selection should still be displayed 🎉

