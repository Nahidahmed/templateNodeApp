# templateNodeApp

Base file and instruction include to setup a node express web app

After cloning the repo:

1. navigate to the app folder on terminal and execute:
   a. npm init
   b. npm install express --save
   c. npm install -D nodemon
   d. npm install ejs
2. go to package.json and add below to the "scripts": object:
   "dev": "nodemon --ignore feedback.json server.js"
