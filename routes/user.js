const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const UserController = require('../controllers/userController');


router.route('/register')
  .get(UserController.renderRegister)
  .post(catchAsync(UserController.register));

router.route('/')
  .get(UserController.renderLogin)
  .post((req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      console.log(req.body);
      if (err) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
      if (!user) {
        return res.status(200).json({ success: false, message: 'PASSWORD SALAH COK' });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Login failed' });
        }
        req.flash('success', 'Welcome back!');
        // const redirectUrl = req.session.returnTo || '/expense';
        const redirectUrl = '/expense';
        delete req.session.returnTo;
        res.redirect(redirectUrl);
      });
    })(req, res, next);
  });

router.route('/logout')
  .get(UserController.logout);

module.exports = router;
