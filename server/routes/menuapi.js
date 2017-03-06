const menuRouter = require('express').Router();
const jwt = require('jsonwebtoken');
// declare axios for making http requests
const axios = require('axios');
menuRouter.get('/navigationlinks', function(req, res) {
        console.log("links called");

    })
    //Get Token 
    // Get all posts
    // router.get('/posts', (req, res) => {
    //     // Get posts from the mock api
    //     // This should ideally be replaced with a service that connects to MongoDB
    //     axios.get(`${API}/posts`)
    //         .then(posts => {
    //             res.status(200).json(posts.data);
    //         })
    //         .catch(error => {
    //             res.status(500).send(error)
    //         });
    // });

module.exports = menuRouter;