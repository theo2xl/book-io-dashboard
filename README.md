# book-io-dashboard
The book-io-dashboard allows a user to register an account, login, and select their favorite book from a list of books. The project is built with [Vue.js](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/), [Nuxt](https://nuxt.com/), and [Tailwind](https://tailwindcss.com/). Favorites are persisted through a REST API that you can set up by follwing the [instrutions below](#provided-api-endpoints). It is responsive and designed mobile-first, so it is intended to look good on any device 📱

## Contents
- [book-io-dashboard](#book-io-dashboard)
  - [Contents](#contents)
  - [Provided API Endpoints](#provided-api-endpoints)
  - [Build Setup](#build-setup)
    - [`yarn`](#yarn)
    - [`npm`](#npm)
  - [Using the Dashboard](#using-the-dashboard)
  - [Screenshots](#screenshots)

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
-- `OR` --
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
   *  The email has minimal validation, a@a.com 
will pass
   *  Don't worry about the email, I just added it so it looked different than the login page and it is not used during the `/login` process
*  Logged in? Great 👍 Let's pick your favorite book 📖
*  Once selected your favorite book will be highligted by a ⭐️ and will show in the first position of the list
*  Can't decide your favoirte book? No worries, select another book in case you change your mind
*  Logout and login again. Your selection should still be displayed 🎉

## Screenshots
<img width="924" alt="Screenshot 2023-10-25 at 10 20 31 PM" src="https://github.com/theo2xl/book-io-dashboard/assets/2512916/5148c2f9-42b2-4b25-b3f1-441d913ad455">
<img width="924" alt="Screenshot 2023-10-25 at 9 59 26 PM" src="https://github.com/theo2xl/book-io-dashboard/assets/2512916/6f278aa0-2cdb-4459-958e-71dc8935fa00">
<img width="308" alt="Screenshot 2023-10-26 at 8 16 08 AM" src="https://github.com/theo2xl/book-io-dashboard/assets/2512916/a5d24731-4658-4cd7-8e67-0c7009f152d7">
<img width="309" alt="Screenshot 2023-10-25 at 10 24 31 PM" src="https://github.com/theo2xl/book-io-dashboard/assets/2512916/c01a54a1-71b8-4444-a898-6a3ef565a3cc">
<img width="307" alt="Screenshot 2023-10-25 at 10 26 10 PM" src="https://github.com/theo2xl/book-io-dashboard/assets/2512916/47e5cf04-35c4-4381-b4c9-bd9f738cf1c1">
