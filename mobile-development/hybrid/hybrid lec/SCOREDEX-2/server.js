const express = require('express')
const passport = require('passport');  // Passport.js for authentication
const BasicStrategy = require('passport-http').BasicStrategy;  // Passport strategy for Basic Authentication
const app = express();
const port = 3001


// Hardcoded credentials for HTTP Basic Auth
const correctUserName = "hello";
const correctPassword = "world";



// Configure Passport.js Basic Authentication
passport.use(new BasicStrategy(
    function(username, password, done) {
        console.log(`Received username: ${username}, password: ${password}`);
        if (username === correctUserName && password === correctPassword) {
            return done(null, { username: username });
        } else {
            return done(null, false);
        }
    }
));



  app.use(passport.initialize()); // Initialize Passport middleware


  app.get('/', (req, res) => {
    res.send('Hello  World!')
  });

  // Public route (no authentication needed)
  app.get('/public', (req, res) => {
      res.send("Hello from /public");
  });


// Secure routes using Passport.js Basic Authentication
app.get('/httpbasic', passport.authenticate('basic', { session: false }), (req, res) => {
    res.send("Hello from /httpbasic");
});

app.get('/anotherhttpbasic', passport.authenticate('basic', { session: false }), (req, res) => {
    res.send("Hello from /anotherhttpbasic");
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})


















/* Middleware for HTTP Basic Authentication
function httpBasicAuth(req, res, next) {
    const authField = req.get('Authorization');
    if(authField == undefined) {
        res.status(401).send('Authorization required');
        return;
    }


    const authStrs = authField.split(' ')

    console.log(authField);
    console.log(authStrs);

    let buff = Buffer.from(authStrs[1], 'base64');  
    let httpBasicUsernamePassword = buff.toString('utf-8');

    console.log(httpBasicUsernamePassword);
    
    const authDataReady = httpBasicUsernamePassword.split(":");
    console.log(authDataReady);

    const username = authDataReady[0];
    const password = authDataReady[1]

    console.log('username: ' + username);
    console.log('password: ' + password);

    // after getting access to incoming username & password, now lets compare the them to our stored information
    // in real world we would seach our user data based on username

     // Check if username and password are correct

    if(correctUserName == username) {
        if(correctPassword == password) {
            // now we are golden! We have correct info, so we can return successful resource response
            next();
            return;
        }

    }
    
    res.status(403).send('Forbidden');
}







//************ when i changed the code middleware to passport.js i need to change my routes define method also 
//(express()) this for middleware and app.get is  

app.get('/', (req, res) => {
    res.send('Hello  World!')
  })

// here we have an endpoint secured with http basic
// Define the /httpbasic route (requires authentication)
(express()).get('/httpbasic', httpBasicAuth, (req, res) => {
    res.send("Hello HTTP Basic world");    
})

// Define another route, /anotherhttpbasic, with the same authentication middleware
(express()).get('/anotherhttpbasic', httpBasicAuth, (req, res) => {
    res.send("Hello from /anotherhttpbasic");
});


// Define the /public route (no authentication needed)
(express()).get('/public', (req, res) => {
    res.send("Hello from /public");
});

// Start the server
(express()).listen(port, () => {
  console.log(`server is  running on port ${port}`)
})
/*
    


//******* to add passport js LEts install the pakage npm install passport passport-http first.*/
