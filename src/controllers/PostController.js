const router = require('express').Router();

router.get('/all', (req, res) => {
    res.render('post/all-posts');
});

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.get('/profile', (req, res) => {
    res.render('post/profile');
});

router.post('/create', (req, res) => {
    console.log(req.body)
    res.redirect ('/posts/all')
});

module.exports = router;
