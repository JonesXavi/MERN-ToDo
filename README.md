# Learnt in 2019 - [TODO - MERN]

Its 2019 and **Winter Is Coming**. Well, apart from the excitements of GOT, Avengers: End game and others, there is a mandatory thing called **resolutions**. So, I thought to myself why not start a new one, a **learning resolution**.
PS: I'm still struggling to succeed in my weights loss resolution :trollface:
So, I kickstart my **Learnt in 2019 Series** with this simple ToDo app. I will continue to develop apps atleast fortnightly :stuck_out_tongue_winking_eye: .

A simple ToDo app built in MERN stack. Created stateful components to keep things simple. Redux is not used.

## Learnings

* Developed using [React 16](https://reactjs.org/).
* [MLab](https://mlab.com/) is used for database purpose.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

## Prerequisites

Follow this [MLab document](https://docs.mlab.com/connecting/) to setup database.
Create a DB user under **Users** tab. (Note: Avoid using special characters such as “@”, “/”, or “:” in your database username or password as they can cause issues if they are not properly escaped)
Once completed, create a ```.env``` file in the root directory and put the below code:
```DB = 'mongodb://<dbuser>:<dbpassword>@<dburi>'```
dbuser - The user created.
dbpassword - The user's corresponding password.
dburi - You can find this in the MLab page once you create a database.

### Installing

1. Clone this repo to your local.
2. Do ```npm install``` inside the repo folder.
3. Once all necessary files are installed, run ```npm start dev```.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the node server<br>
Open [http://localhost:5000](http://localhost:5000) in postman or similar and to validate the APIs.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm start-watch`

Runs the node server in watch mode.<br>

### `npm run dev`

Runs the node server and client application concurrently.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
