## Setup

1. Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already
2. `cd` into client and run `npm install` from the command line to install all dependencies
3. `cd` into server and run `npm install` from the command line to install all dependencies
4. Add `.env` file in the `server`folder.

```
// .env
DB=mongodb+srv://lsaccount:testing123@cluster0.emccd5i.mongodb.net/test?retryWrites=true&w=majority
```

## Running the app

While in the server directory, run `npm run dev` to start the live server. The live server will watch for changes to files in the `src` directory and reload the page when they're changed.

---

boardId = "62cbc5fe07edfc39c2767247"

# Challenge 1

- When a user clicks a card:
  - Card Modal opens
  - URL changes to "/cards/:id"
  - Board is still shown in the background

You already have the CardModal component.

To render multiple components on a single path in React Router v6 you can wrap them with a React Fragment.

To get the card from the server you can use `API.getCard()` method and pass `cardId` to it. You just need to import `API` from the `ApiClient.js` file in `lib` folder.

To update the state with the fetched card, you can use `GET_CARD` action, to which you need to pass `card` property as a payload. The reducer is defined in `reducers` folder, `reducer.js` file.

_Important_ - When you refresh the page at "/cards/:id" both Board and Card Modal should still be visible. List title, on line `15` in the CardModal should be dynamic.

# Challenge 2

- When the user clicks Add a card... , Add form for the card opens. However, if the user clicks "Add a card..." in another List, that one will open as well so we would see 2 forms open.

Your task is to only display 1 Add Form, so when the user Add Form when user clicks "Add a card..." in another list, currently open one should close automatically.

_UI_

The new card form is active when the parent `.list-wrapper` has the `add-dropdown-active` class and the `.add-dropdown.add-bottom` element has the `active-card` class.

# Challenge 3

- User can Edit the card title in the Card Modal. When the modal opens card title is visible, and once the user changes it, it is saved "on blur".

To update the card you can use `API.updateCard()` method and pass `cardId` to and the new title wrapped in an object `{title: newTitle}`. You also need to import `API` from the `ApiClient.js` file in `lib` folder.

To update the state with the updated card, you can use `UPDATE_CARD` action, to which you need to pass `card` property as a payload. The reducer is defined in `reducers` folder, `reducer.js` file.