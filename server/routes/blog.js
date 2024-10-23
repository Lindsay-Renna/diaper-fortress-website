import { Router } from "express";
import BlogPost from '../models/BlogPost.js';


const router = Router();

// POST route to create a new blog post
router.post('/posts', async (req, res) => {
    const { title, videoURL, content } = req.body;
  
    // Validate the request body
    if (!title || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Create a new blog post document
      const newPost = new BlogPost({ title, videoURL, content });
      // Save it to the database
      await newPost.save();
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

export default router;