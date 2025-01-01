// backend/controllers/postController.js
const Post = require('../models/Post');

// Create a post
exports.createPost = async (req, res) => {
    const { content } = req.body;

    try {
        const post = await Post.create({ user: req.user.id, content });
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Like a post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post.likes.includes(req.user.id)) {
            post.likes.push(req.user.id);
            await post.save();
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a comment
exports.commentOnPost = async (req, res) => {
    const { text } = req.body;

    try {
        const post = await Post.findById(req.params.id);

        post.comments.push({ user: req.user.id, text });
        await post.save();

        res.json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

