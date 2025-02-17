# noderestapi
### Simple REST API with Node.js and Firebase

This project is a simple REST API built using Node.js, Express, and Firebase Realtime Database. It demonstrates basic CRUD (Create, Read, Update, Delete) operations for managing users.

### Table of Contents
1 Overview

2 Installation

3 Environment Variables

4 Usage

5 API Endpoints

6 Dependencies

##  Overview
This project is a backend REST API that allows you to perform CRUD operations on a users resource.

The API is built using:

Node.js: A JavaScript runtime for building server-side applications.

Express: A web framework for Node.js.

Firebase Realtime Database: A NoSQL cloud database to store and sync data.

## Installation 
Follow these steps to set up and run the application locally.

Prerequisites
Node.js (v14 or higher)

npm (Node Package Manager)

A Firebase project with Realtime Database enabled.

# steps 
1, Clone the repository:
https://github.com/suzanaaraya/noderestapi.git
2, Install dependencies:
npm install
3, Set up Firebase:

Go to the Firebase Console.

Create a new project and enable Realtime Database.

Generate a Service Account Key:

Navigate to Project Settings > Service Accounts.

Click Generate New Private Key and download the JSON file.

Rename the file to serviceAccountKey.json and place it in the config/ folder.
4, Set up environment variables:

Create a .env file in the root directory of the project.

Add the following variables:
PORT=3000
FIREBASE_DATABASE_URL=https://your-database-name.firebaseio.com
5, Run the application:
node app.js

6, Test the API:

The API will be running at http://localhost:3000.

Use tools like Postman or Thunder Client to test the endpoints.

## Environment Variables
The following environment variables are required to run the application:


Variable Name                    Description
PORT                            The port on which the server will run (default: 3000).
FIREBASE_DATABASE_URL           The URL of your Firebase Realtime Database.


Usage
Once the application is running, you can interact with the API using the following endpoints.

Method	                 Endpoint	                                  Description
GET	                      /	                                        Welcome message.
POST	               /users || /expenses  || /incomes	            Create a new user or expense or income.
GET	                  /users ||  /expenses  || /incomes	            Get all users or or expenses or incomes.
GET	                 /users/:id	|| /expenses:id  || /incomes:id	    Get a single user or expense or income by ID.
PUT	                 /users/:id	|| /expenses:id  || /incomes:id     Update a user or expense or income by ID.
DELETE	             /users/:id	|| /expenses:id  || /incomes:id     Delete a user or expense or income by ID.

## Dependencies
The following dependencies are used in this project:



Package	                       Description
express	                      Web framework for Node.js.
firebase-admin	              Firebase Admin SDK for Node.js.
dotenv	                      Loads environment variables from a .env file.




