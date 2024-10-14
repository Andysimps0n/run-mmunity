const express = require('express');
const app = express();
const router = express.Router()
app.use(express.json());

const { handlePost } = require('../handlers/handlePost')

router.post('/write', handlePost());




module.exports = router;