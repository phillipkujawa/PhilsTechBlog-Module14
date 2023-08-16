const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});
//get user posts
router.get('/user', withAuth, async (req, res) => {
    try {
        const userPostsData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            }
        });
        const userPosts = userPostsData.map(post => post.get({ plain: true }));

        res.status(200).json(userPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        
        // Check if the logged-in user is the author of the post
        if (post.user_id !== req.session.user_id) {
            res.status(403).json({ message: 'You are not authorized to edit this post!' });
            return;
        }

        await post.update(req.body);

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        // Check if the logged-in user is the author of the post
        if (post.user_id !== req.session.user_id) {
            res.status(403).json({ message: 'You are not authorized to delete this post!' });
            return;
        }

        await post.destroy();

        res.status(200).json({ message: 'Post deleted successfully!' });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
