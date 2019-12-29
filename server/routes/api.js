const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/posts', async(req, res) =>{
  try{
    const posts = await Posts.find();
    res.json(posts);
  } catch(err){
    res.json({message: err});
  }
});

router.post('/posts', async(req, res) =>{
  const post = new Posts({
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  });
  try{
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err){
    res.json({message: err});
  }
});

router.get('/details/:id', async(req, res) =>{
  try{
    const post = await Posts.findById(req.params.id);
    res.json(post);
  } catch(err){
    res.json({message: err});
  }
});

module.exports = router;
