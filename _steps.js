/**
 * 1. create a folder (manually mkdir)
 * 2. open command line to that folder(cd my-app)
 * 3. npm init -y
 * 4. npm install express
 * 5. create index.js file
 * ------------------
 * For Express/node server
 * ------------------
 * 1. require express
 * 2. create app variable
 * 3. declare port
 * 4. set app.get('/')
 * 5. listen to port
 * 6. node index.js at command
 * {
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 5000;

    app.get('/',(req,res)=>{
    res.send('I can code in node!!');
    });

    app.listen(port,()=>{
        console.log('listening to port',port);
    }) 
}
 * 7. npm install -g nodemon
 * 8. write in package.json=> under       "scripts": 
 *  "start": "node index.js",
    "start-dev": "nodemon index.js",
 *
-----------
 * get
 * -----------
 * 1. cors middleware
 * ---------------------
 * post
 * -----------------------
 * 1.
 * 
 */