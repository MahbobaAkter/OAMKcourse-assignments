const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Assuming you have a User model

const app = express();
const port = 3002;

// Middleware
app.use(bodyParser.json());

