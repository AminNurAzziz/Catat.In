const User = require('../models/userSchema');
const Wallet = require('../models/walletSchema');
const passport = require('passport');

module.exports = {
    renderRegister: (req, res) => {
        res.render('registrasi');
    },

    register: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;
            const user = new User({ username, email });
            const registeredUser = await User.register(user, password);
            // create wallet for the registered user
            const wallet = new Wallet({ user: registeredUser._id });
            await wallet.save();
            req.login(registeredUser, (err) => {
                if (err) return next(err);
                req.flash('success', 'Welcome to the expense tracker!');
                res.redirect('/expense');
            });
        } catch (err) {
            req.flash('error', err.message);
            res.send('register');
        }
    },

    renderLogin: (req, res) => {
        res.render('login');
    },

    login: (req, res) => {
        req.flash('success', 'Welcome back!');
        const redirectUrl = req.session.returnTo || '/expense';
        delete req.session.returnTo;
        res.redirect(redirectUrl);
        // console.log(req.user._id)
    },

    logout: (req, res) => {
        req.logout((err) => {
            if (err) return next(err);
            req.flash('success', 'Goodbye!');
            res.redirect('/');
        });
    },
};
