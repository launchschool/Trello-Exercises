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

boardId = "62cbc5fe07edfc39c2767247"

card1 = "62cbc7906891363a4e523daa"

card2 = "62cbc79d6891363a4e523daf"

# Challenge 1

- When a user clicks a card:
  - Card Modal opens
  - URL changes to "/cards/:id"
  - Board is still shown in the background

To display the Card Modal you can just render it on page, along with the Board and the provided CSS will handle everything else.

_Important_ - When you refresh the page at "/cards/:id" both Board and Card Modal should still be visible

# Challenge 2

- When the user clicks Add a card... , Add form for the card opens. However, if the user clicks "Add a card..." in another List, that one will open as well so we would see 2 forms open.

Your task is to only display 1 Add Form, so when the user Add Form when user clicks "Add a card..." in another list, currently open one should close automatically.

_UI_

The new card form is active when the parent `.list-wrapper` has the `add-dropdown-active` class and the `.add-dropdown.add-bottom` element has the `active-card` class.

Since only one list should have the form active at a time, only one list should have the `add-dropdown-active` class at a time.

# Challenge 3

- User can Edit the card title in the Card Modal. When the modal opens card title is visible, and once the user changes it, it is saved "on blur".
