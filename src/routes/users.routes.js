const { Router } = require('express');
const router = Router();
const usersCtrl = require('../controllers/users.controller');
const { route } = require('./index.routes');

router.get('/users/signup', usersCtrl.renderSignUpForm);

router.post('/users/signup', usersCtrl.signUp);

router.get('/users/signin', usersCtrl.renderSignInForm);

router.post('/users/signin', usersCtrl.signIn);

router.get('/users/logout', usersCtrl.logOut)

module.exports = router;