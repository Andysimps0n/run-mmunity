
const express = require('express');
const app = express();
const router = express.Router()
app.use(express.json());

const { handleSignUp, handleLogin } = require('../handlers/handleUser')

router.post('/login', handleLogin());

router.post('/signup', handleSignUp())

module.exports = router 