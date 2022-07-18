```
// .env
DB=mongodb+srv://lsaccount:testing123@cluster0.emccd5i.mongodb.net/test?retryWrites=true&w=majority
```

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

# Challenge 3

- User can Edit the card title in the Card Modal. When the modal opens card title is visible, and once the user changes it, it is saved "on blur".
