const router = require('express').Router();
const { User } = require('../../models');

// Signup
// Signup
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({ message: 'User successfully registered!' });
        });
    } catch (err) {
        res.status(400).json({ message: 'Error registering user. Maybe the username or email already exists.' });
    }
});


// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        
        if (!userData) {
            return res.render('login', { error: 'Incorrect email or password, please try again' });
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            return res.render('login', { error: 'Incorrect email or password, please try again' });
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            
            res.redirect('/dashboard');
        });

    } catch (err) {
        res.status(400).render('login', { error: 'An error occurred during login. Please try again.' });
    }
});

// Logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
