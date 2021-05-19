const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const Post = require('../model/post');


router.get('/', async function(req,res){
  var posts = await Post.find();
  res.render('index', {posts});
});

router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});


// CRUD
router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body);
  await post.save();
  res.redirect('/')
});

router.get('/edit/:id', async(req,res) =>{
  var post = await Post.findById(req.params.id);
  res.render('edit', {post});
})

router.post('/edit/:id', async(req,res) =>{
  var id = req.params.id;
  await Post.update({_id: id}, req.body);
  res.redirect('/')
})


router.get('/delete/:id',  async (req,res) =>{
  var post = await Post.findById(req.params.id);
  res.render('delete', {post});
})

router.post('/delete/:id',  async (req,res) =>{
  var id = req.params.id;
  await Post.deleteOne({_id: id});
  res.redirect('/');
})
module.exports = router;