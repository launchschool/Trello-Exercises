<!-- TOC -->

- [1. API Documentation](#1-api-documentation)
    - [1.1. Example API Error Format](#11-example-api-error-format)
    - [1.2. GET /](#12-get-)
    - [1.3. GET /api/boards](#13-get-apiboards)
        - [1.3.1. Expected parameters](#131-expected-parameters)
        - [1.3.2. Example Response](#132-example-response)
    - [1.4. POST /api/boards](#14-post-apiboards)
        - [1.4.1. Expected Payload](#141-expected-payload)
        - [1.4.2. Successful Response](#142-successful-response)
            - [1.4.2.1. Example Response](#1421-example-response)
        - [1.4.3. Error Response](#143-error-response)
    - [1.5. GET /api/boards/:id](#15-get-apiboardsid)
        - [1.5.1. Expected Payload](#151-expected-payload)
        - [1.5.2. Successful Response](#152-successful-response)
            - [1.5.2.1. Example Response](#1521-example-response)
        - [1.5.3. Error Response](#153-error-response)
    - [1.6. POST /api/lists](#16-post-apilists)
        - [1.6.1. Expected Payload](#161-expected-payload)
        - [1.6.2. Successful Response](#162-successful-response)
            - [1.6.2.1. Example Response](#1621-example-response)
        - [1.6.3. Error Response](#163-error-response)
    - [1.7. PUT/PATCH /api/lists/:id](#17-putpatch-apilistsid)
        - [1.7.1. Expected Payload](#171-expected-payload)
        - [1.7.2. Successful Response](#172-successful-response)
            - [1.7.2.1. Example Response](#1721-example-response)
        - [1.7.3. Error Response](#173-error-response)
    - [1.8. POST /api/cards](#18-post-apicards)
        - [1.8.1. Expected Payload](#181-expected-payload)
        - [1.8.2. Successful Response](#182-successful-response)
            - [1.8.2.1. Example Response](#1821-example-response)
        - [1.8.3. Error Response](#183-error-response)
    - [1.9. GET /api/cards/:id](#19-get-apicardsid)
        - [1.9.1. Expected Payload](#191-expected-payload)
        - [1.9.2. Successful Response](#192-successful-response)
            - [1.9.2.1. Example Response](#1921-example-response)
        - [1.9.3. Error Response](#193-error-response)
    - [1.10. PUT/PATCH /api/cards/:id](#110-putpatch-apicardsid)
        - [1.10.1. Expected Payload](#1101-expected-payload)
            - [1.10.1.1. Example Payload](#11011-example-payload)
        - [1.10.2. Successful Response](#1102-successful-response)
            - [1.10.2.1. Example Response](#11021-example-response)
        - [1.10.3. Error Response](#1103-error-response)
    - [1.11. POST /api/comments](#111-post-apicomments)
        - [1.11.1. Expected Payload](#1111-expected-payload)
        - [1.11.2. Successful Response](#1112-successful-response)
            - [1.11.2.1. Example Response](#11121-example-response)
        - [1.11.3. Error Response](#1113-error-response)

<!-- /TOC -->

# 1. API Documentation

## 1.1. Example API Error Format

All of the `/api` routes use the following format to return errors:

```json
{
  "error": "Invalid board id provided"
}
```

## 1.2. GET /

This route is used to render the template which renders the assets so that React can take over and render our boards index.

## 1.3. GET /api/boards

Get all boards from the database. This does not return any nested data.

### 1.3.1. Expected parameters

None

### 1.3.2. Example Response

```json
[
  {
    "_id": 1,
    "title": "Web dev",
    "createdAt": "2020-10-04T05:57:02.777Z",
    "updatedAt": "2020-10-04T05:57:02.777Z"
  },
  {
    "_id": 2,
    "title": "Cooking",
    "createdAt": "2020-10-04T15:29:04.095Z",
    "updatedAt": "2020-10-04T15:29:04.095Z"
  }
]
```

## 1.4. POST /api/boards

Creates a board.

### 1.4.1. Expected Payload

```json
{
  "board": {
    "title": "My new board"
  }
}
```

### 1.4.2. Successful Response

The new board is returned in JSON format with a 201 response status code.

#### 1.4.2.1. Example Response

```json
{
  "_id": 12,
  "title": "My new board",
  "createdAt": "2020-10-06T23:08:28.375Z",
  "updatedAt": "2020-10-06T23:08:28.375Z"
}
```

### 1.4.4. Error Response

If no title is provided, an error will be returned with a 422 “Unprocessable Entity” status code.

## 1.5. GET /api/boards/:id

Retrieve the board with the given `id`.

### 1.5.1. Expected Payload

None

### 1.5.2. Successful Response

The board is returned with the following nested data:

- board -\>
  - lists -\>
    - list -\>
      - cards -\>
        - card

The response status code is 200.

#### 1.5.2.1. Example Response

```json
{
  "_id": 1,
  "title": "Web dev",
  "createdAt": "2020-10-04T05:57:02.777Z",
  "updatedAt": "2020-10-04T05:57:02.777Z",
  "lists": [
    {
      "_id": 3,
      "title": "CSS",
      "boardId": 1,
      "createdAt": "2020-10-04T06:53:39.302Z",
      "updatedAt": "2020-10-04T06:53:39.302Z",
      "position": 65535.0,
      "cards": [
        {
          "_id": 7,
          "title": "1",
          "dueDate": null,
          "labels": [
            "red",
            "purple"
          ],
          "description": "Selectors",
          "listId": 3,
          "boardId": 1,
          "position": 65535.0,
        }
      ]
    }
  ]
}
```

### 1.5.3. Error Response

If the board doesn’t exist an error will be returned with a 404 status code.

## 1.6. POST /api/lists

Creates a list.

### 1.6.1. Expected Payload

NOTE: The `boardId` where the list will reside is required.

```json
{
  "boardId": 1,
  "list": {
    "title": "My list"
  }
}
```

### 1.6.2. Successful Response

The list is returned in JSON form with a 201 status code.

#### 1.6.2.1. Example Response

```json
{
  "_id": 10,
  "title": "My list",
  "boardId": 1,
  "createdAt": "2020-10-06T23:40:26.606Z",
  "updatedAt": "2020-10-06T23:40:26.606Z",
  "position": 65535.0
}
```

### 1.6.4. Error Response

If a board with the provided `boardId` doesn’t exist, an error will be returned with a 404 status code. If no title is provided, an error is returned with a 422 “Unprocessable Entity” status code.

## 1.7. PUT/PATCH /api/lists/:id

Update a list.

### 1.7.1. Expected Payload

Any combination of `title` and `position` can be provided. The only requirement is that at least one must be provided.

```json
{
  "title": "Updated title",
  "position": 137882
}
```

### 1.7.2. Successful Response

The list is returned in JSON form with a 200 status code.

#### 1.7.2.1. Example Response

```json
{
  "_id": 1,
  "title": "Updated title",
  "position": 137882.0,
  "boardId": 1,
  "createdAt": "2020-10-04T05:57:07.222Z",
  "updatedAt": "2020-10-06T23:48:44.540Z"
}
```

### 1.7.2. Error Response

If a list with the provided `_id` doesn’t exist, an error will be returned with a 404 status code. If no title or position is provided, an error is returned with a 422 “Unprocessable Entity” status code.

## 1.8. POST /api/cards

Creates a card. This also generates a card action describing that the card was added to the given list.

### 1.8.1. Expected Payload

NOTE: The `listId` where the card will reside is required.

```json
{
  "listId": 13,
  "card": {
    "title": "My new card"
  }
}
```

### 1.8.2. Successful Response

The new card is returned in JSON format with a 201 response status code.

#### 1.8.2.1. Example Response

```json
{
  "_id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "listId": 13,
  "position": 65535.0,
  "archived": false,
  "createdAt": "2020-10-08T17:54:55.285Z",
  "updatedAt": "2020-10-08T17:54:55.285Z",
  "dueDate": null,
  "completed": false,
  "boardId": 1,
  "comments": [],
  "actions": []
}
```

### 1.8.3. Error Response

If an invalid (or no) `listId` is provided, an error will be returned with a 404 response status code. The only required field is the title. If no title (or a blank one) is provided, a 422 “Unprocessable Entity” status code will be returned along with an error describing the problem.

## 1.9. GET /api/cards/:id

Retrieve the card with the given `id`.

### 1.9.1. Expected Payload

None

### 1.9.2. Successful Response

The card is returned in JSON format. The JSON also includes the card’s comments and actions nested within the card object.

#### 1.9.2.1. Example Response

```json
{
  "_id": 9,
  "title": "My new card",
  "description": "",
  "labels": [],
  "listId": 13,
  "position": 65535.0,
  "archived": false,
  "createdAt": "2020-10-08T17:54:55.285Z",
  "updatedAt": "2020-10-08T17:54:55.285Z",
  "dueDate": null,
  "completed": false,
  "boardId": 1,
  "comments": [],
  "actions": [
    {
      "_id": 49,
      "description": " added this card to My list",
      "createdAt": "2020-10-08T17:54:55.319Z",
      "updatedAt": "2020-10-08T17:54:55.319Z",
      "card_id": 9
    }
  ]
}
```

### 1.9.3. Error Response

If no card exists with the given `id`, an error response will be returned with a 404 status code.

## 1.10. PUT/PATCH /api/cards/:id

Update a card. This also generates card actions in the following situations:

- Due date was added
- Due date was removed
- Due date was changed
- Completion status was changed
- Card was moved to a different list
- Card was archived
- Card was sent back to the board from the archive

### 1.10.1. Expected Payload

At least one attribute must be included in a `"card"`object in the payload. The allowed attributes are:

- `title`
- `listId`
- `position`
- `description`
- `archived`
- `dueDate`
- `completed`
- `labels`

#### 1.10.1.1. Example Payload

```json
{
  "card": {
    "title": "My updated title",
    "completed": true
  }
}
```

### 1.10.2. Successful Response

The updated card will be returned in JSON format. The returned object also includes the card’s actions nested within the `card` object. That is because certain updates generate new actions which need to be displayed.

#### 1.10.3.1. Example Response

```json
{
  "title": "My updated title",
  "completed": true,
  "listId": 13,
  "dueDate": null,
  "_id": 9,
  "archived": false,
  "description": "",
  "labels": [],
  "position": 65535.0,
  "createdAt": "2020-10-08T17:54:55.285Z",
  "updatedAt": "2020-10-08T18:15:25.017Z",
  "boardId": 1,
  "comments": [],
  "actions": [
    {
      "_id": 50,
      "description": " marked the due date complete",
      "createdAt": "2020-10-08T18:15:25.014Z",
      "updatedAt": "2020-10-08T18:15:25.014Z",
      "cardId": 9
    },
    {
      "_id": 49,
      "description": " added this card to My list",
      "createdAt": "2020-10-08T17:54:55.319Z",
      "updatedAt": "2020-10-08T17:54:55.319Z",
      "cardId": 9
    }
  ]
}
```

### 1.10.4. Error Response

If no card exists with the given `id`, a 404 status code is returned with an error. If an empty title is provided, or no attributes are provided, a 422 “Unprocessable Entity” status code is returned along with an error.

## 1.11. POST /api/comments

Create a comment on a card.

### 1.11.1. Expected Payload

NOTE: The `cardId` where the comment will reside is required.

```json
{
  "cardId": 9,
  "comment": {
    "text": "This is my comment"
  }
}
```

### 1.11.2. Successful Response

The new comment is returned in JSON format.

#### 1.11.2.1. Example Response

```json
{
  "_id": 3,
  "text": "This is my comment",
  "cardId": 9,
  "createdAt": "2020-10-08T18:23:59.803Z",
  "updatedAt": "2020-10-08T18:23:59.803Z"
}
```

### 1.11.3. Error Response

If no card exists with the given `id`, a 404 status code will be returned with an error. If no `text` (or an empty one) is provided, a 422 “Unprocessable Entity” status code will be returned with an error.