const router = require('express').Router();

const homeRoutes = require('./homeController');
const dashboardRoutes = require('./dashboardController');
const userRoutes = require('./api/userController');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');

router.use('/api/users', userRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/comments', commentRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
