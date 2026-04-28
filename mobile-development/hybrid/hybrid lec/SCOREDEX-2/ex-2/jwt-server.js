const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3002;

// Secret key for JWT signing
const secretKey = 'your_secret_key'; // Change this for production!

// Hardcoded username and password for authentication
const correctUsername = 'hello';
const correctPassword = 'world';

// Middleware for verifying JWT
function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).send('Access Denied');
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid Token');
        }
        req.user = user; // Save user info in the request object
        next();
    });
}

// Sign-in route to generate JWT
app.post('/signin', express.json(), (req, res) => {
    const { username, password } = req.body;

    if (username === correctUsername && password === correctPassword) {
        // Create a JWT token with username
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        return res.json({ token });
    } else {
        return res.status(400).send('Invalid credentials');
    }
});

// Protected /posts route
app.get('/posts', verifyToken, (req, res) => {
    const posts = [
        'Early bird catches the worm',
        'A watched pot never boils',
        'Actions speak louder than words'
    ];
    res.json(posts);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});





/*Created an Express server ✅
Implemented a JWT authentication system ✅
Created a /signin route to generate a JWT token ✅
Protected the /posts route using JWT authentication ✅
Successfully tested the authentication flow ✅*/