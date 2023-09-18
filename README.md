![License Badge](https://img.shields.io/badge/license-MIT-green)

# 18 NoSQL: Social Network API
## 🌟 Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. This project challenges you to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It utilizes Express.js for routing, a MongoDB database, and the Mongoose ODM.

## 📜 User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
## Walkthrough Video
<a href="https://www.youtube.com/watch?v=9HfLLEZ3hMI&t=13s"><img src="assets/socialMediaApi.gif" alt="Website Preview"></a>


## 🚀 Installation
1. Clone this GitHub repository
```bash
git clone git@github.com:carlosmb001/social_media_api.git
```
2. Install the required npm packages
```bash
npm install
```
## ▶️ Usage
1. To start the server, run the following command
```bash
npm start
```
2. Install [Insomnia](https://insomnia.rest/download) to test out the routes.
## 💻 Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## 🔗 API Routes
### 🚶 Users
- `GET /api/users`: Retrieves all users.
- `GET /api/users/:id`: Retrieves a single user by its `_id` and includes populated thought and friend data.
- `POST /api/users`: Creates a new user.
- `PUT /api/users/:id`: Updates a user by its `_id`.
- `DELETE /api/users/:id`: Removes a user by its `_id`.
###  👯 Friend List of a User
- `POST /api/users/:userId/friends/:friendId`: Adds a new friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Removes a friend from a user's friend list.
### 💭 Thoughts
- `GET /api/thoughts`: Retrieves all thoughts.
- `GET /api/thoughts/:id`: Retrieves a single thought by its `_id`.
- `POST /api/thoughts`: Creates a new thought.
- `PUT /api/thoughts/:id`: Updates a thought by its `_id`.
- `DELETE /api/thoughts/:id`: Removes a thought by its `_id`.
### ❤️ Reactions to Thoughts
- `POST /api/thoughts/:thoughtId/reactions`: Adds a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Removes a reaction by its `reactionId` from a thought.

## 📄 License
This project uses the MIT license.
## 👏 Acknowledgements
edX Boot Camps LLC for the project prompt and resources.



