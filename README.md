# Shopping Cart App

## Setup
1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
1. Install [yarn](https://yarnpkg.com/en/docs/install#mac-stable)
3. Install the `create-react-app` package globally: `yarn global add create-react-app`
4. Clone this repository
5. `cd` into the downloaded directory
6. `cd` into client and run `yarn install` from the command line to install all dependencies
6. `cd` into server and run `yarn install` from the command line to install all dependencies

## DataBase Setup

1. Create mongoDB account - https://account.mongodb.com/account/register
2. Create AWS cluster
3. Under Security tab, click Database Access, and on the right `add new database user`. After you enter username and password, click `add user` at the bottom right corner.
4. Under Security tab, click Network Access, and whitelist your IP address.
5. Once your cluster is created, under Clusters tab, click connect and copy the connection string which will look something like this `mongodb+srv://test123:<password>@cluster0-zamyu.mongodb.net/test?retryWrites=true&w=majority`. Instead of `test123` there will be your username, and you will need to replace `<password>` with your password.
6. Finally, inside your project folder, `cd` into server, create new file `.env` and enter `DB=<paste the string from above here>`. It will look similar to this `DB=mongodb+srv://test123:mypass@cluster0-zamyu.mongodb.net/test?retryWrites=true&w=majority`.

## Running the app
While in the server directory, run `npm run dev` to start the live server. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

## Viewing Static Version of the App
While developing the app, you can take a look at the static pages that you'll eventually convert into a dynamic application. To do so, visit `http://localhost:3000/ui` in the browser.

## Developing the app

The starting point of the application is the `/client/src/index.js` file. That's where the root component of the application - `Application` - is rendered to the DOM. You can add new components to the `/client/src/components` folder.
```