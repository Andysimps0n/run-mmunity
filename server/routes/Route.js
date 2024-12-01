const express = require('express');
const app = express();
const router = express.Router()
app.use(express.json());

const { handleGetRoutes, handleSaveRoute } = require('../handlers/handleRoute')

router.get('/all', handleGetRoutes());
router.post('/save', handleSaveRoute());


module.exports = router;