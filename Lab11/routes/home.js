const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Express and MongoDB',
        message: 'working'
    })
});

module.exports = router;