const router = require('express').Router();
const creatureService = require('../services/creatureService');


router.get('/all', async (req, res) => {
     const creatures = await creatureService.getAll().lean();
     console.log({ creatures })

    res.render('post/all-posts', { creatures });
});

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.get('/profile', (req, res) => {
    res.render('post/profile');
});

router.post('/create', async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description, } = req.body

    const payload = {  
        name, 
        species, 
        skinColor, 
        eyeColor, 
        image, 
        description, 
        owner: req.user, 
    }
    console.log(payload)

    await creatureService.create(payload);
    
    res.redirect ('/posts/all')
});

module.exports = router;
