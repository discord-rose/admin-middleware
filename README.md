# Admin Middleware

Admin middleware for [discord-rose](https://npmjs.com/package/discord-rose)

## Install

`npm i @discord-rose/admin-middleware`

## Usage

Setting CommandOptions`.admin` to true will let the middleware run and lock a command if a user is not an admin.

The middleware can either take an ID of an admin, an array of an IDs of an admin, or an async function to check.

```js
const adminMiddleware = require('@discord-rose/admin-middleware')

worker.commands
  .middleware(adminMiddleware('142408079177285632'))
  .add({
    admin: true,
    command: 'eval',
    exec: (ctx) => {
      // naughty eval code
    }
  })
```
This command will now only run if the user has an ID of 142408079177285632, essentially admin locking the command.

## Alternate methods

```js
worker.commands
  .middleware(adminMiddleware(['142408079177285632', '277183033344524288']))
```

Or

```js
worker.commands
  .middleware(adminMiddleware(async (id) => { // author id
    return await isAdmin(id)
  }))
```