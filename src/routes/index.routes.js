const {Router} = require('express');
const { route } = require('../server');
const router = Router();
const indexCtlr = require('../controllers/index.controller')

router.get('/', indexCtlr.renderIndex)

router.get('/about', indexCtlr.renderAbout)

module.exports = router;