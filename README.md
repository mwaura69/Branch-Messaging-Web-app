# Branch-Messaging-Web-app


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started we are going to need a couple of things. First this guide assumes you are familiar with basic mongoDB, Node.js and React v18 (in our case we are going to be using react-vite).

### Prerequisites



- Node.js
- MongoDB account
- chatengine.io account
- bcrypt
- jsonwebtoken
- Nodemon
- Express
- React-vite
- Axios


### Installation 

1. Clone the repo.

In the Backend:

- Navigate to the `Backend` directory and ```npm install``` to install the necessary dependencies.

- After installing run ```npm start``` to start the backend server.

- The server should be running on `http://localhost:4001`

- You should see an output that says `Connected to database, listening on port 4001`

-The server should be fine

if not it means the mongodb uri is either incorrect or unavailable, I have set mine in an .env file you can either use yours or you can get in touch I provide mine

In the Frontend: 

- Run ```npm install ``` to install all dependencies

- Run ```npm run dev``` to start the server

- The server should be running on `http://localhost:5173`

## Usage

- On your browser navigate to the `http://localhost:5173` and where you can access the landing page of both the signup and login of users.

-You can login with the admin details to see all the messages sent to him.

-I will provide the details later



## Contributing


1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

I acknowledge the use of chatengine's api and mongoDb's database

