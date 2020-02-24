const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        css: 'index.css'
    });
});

router.get('/for_loop', (req, res) => {
    res.render('for_loop', {
        title: 'For loop',
        css: 'about.css',
        js: 'for_loop.js'
    });
});

router.get('/foreach', (req, res) => {
    res.render('foreach', {
        title: 'forEach',
        css: 'about.css',
        js: 'foreach.js'
    });
});

router.get('/standard_filter', (req, res) => {
    res.render('standard_filter', {
        title: 'Standard Filter',
        css: 'about.css',
        js: 'standard_filter.js'
    });
});

router.get('/ES6_filter', (req, res) => {
    res.render('ES6_filter', {
        title: 'ES6 Filter',
        css: 'about.css',
        js: 'ES6_filter.js'
    });
});

router.get('/map', (req, res) => {
    res.render('map',{
        title: 'Map Method',
        css: 'about.css',
        js: 'map.js'
    })
});

router.get('/sort', (req, res) => {
    res.render('sort', {
        title: 'Sort Method',
        css: 'about.css',
        js: 'sort.js'
    })
})

router.get('/reduce', (req, res) => {
    res.render('reduce', {
        title: 'Reduce Method',
        css: 'about.css',
        js: 'reduce.js'
    });
});

router.get('/combination', (req, res) => {
    res.render('combination', {
        title: 'Combination of all Method',
        css: 'about.css',
        js: 'all_method.js'
    })
})

module.exports = router;