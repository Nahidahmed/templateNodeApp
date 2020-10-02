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

3. Code Formatting tools and Configurations
    Tool:                    ESLint	
    Purpose:                 ESLint statically analyzes your code to quickly find problems.	
    Visual Studio Extension: ESLint by Dirk Baeumer
    Installation:            a. npm install -D eslint
                        	  b. npx eslint --init

                     Provide below answers for the initialization questions:
                     1.How would you like to use ESlint? -To check syntax, find problems, and enforce code style
                     2.What type of modules your project use? -CommonJS
                     3. Which framework does your project use?-None of the above
                     4. Does your project use TypeScript? N
                     5. Where does your code run? Node
                     6. How would you like to define a style for your project?-Use a popular style guide
                     7. Which style guide you want to follow? Airbnb
                     8. What format do you want your config to be in? JSON
                     9. Allow additional npm dependencies to install"

    Tool:                    Prettier	
    Purpose:                 Code formatting	
    Visual Studio Extension: Prettier - Code Formatter by Esben Petterson    
    Installation:            npm install -D prettier eslint-config-prettier eslint-plugin-prettier
    
    Changes to Visual Studio Setting (Code->Preference->Setting)
         1. search "eslint" and turn on "Auto fix on save"
         2. search "save" and turn on "Format on save"
         3. search "format" and set default formatter to prettier
    
    Project Level Configuations
         1. open .eslintrc.json file
            a. add "prettier" to extends field
            b. add new entry: "plugins": ["prettier"] 

         2. create a new confile file "..prettierrc" and add below lines:
               {
                 "trailingComma": "es5",
                 "printWidth": 100,
                 "singleQuote": true
              }
