const express = require('express');
const app = express();
const router = express.Router()
app.use(express.json());

const { handlePost,handleGetPost } = require('../handlers/handlePost')

router.post('/write', handlePost());
router.get('/all', handleGetPost());




module.exports = router;