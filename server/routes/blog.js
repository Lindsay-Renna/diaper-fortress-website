import { Router } from "express";
import BlogPost from '../models/BlogPost.js';


const router = Router();
//GET route to get BlogPosts
router.get('/posts',async(req,res)=>{
    try {
        // Retrieve all blog posts from the database
        const blogPosts = await BlogPost.find().sort({ createdAt: -1 }); // Sort by most recent posts
        res.status(200).json(blogPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Server error while fetching posts' });
      }
    });

    //GET BlogPost by ID
    router.get('/posts/:id', async (req, res) => {
        const { id } = req.params;
    
        try {
            // Find the blog post by ID
            const blogPost = await BlogPost.findById(id);
    
            // If no post is found, return a 404 error
            if (!blogPost) {
                return res.status(404).json({ message: 'Blog post not found' });
            }
    
            // Return the found blog post
            res.status(200).json(blogPost);
        } catch (error) {
            console.error('Error fetching post:', error);
            res.status(500).json({ message: 'Server error while fetching post' });
        }
    });

// POST route to create a new blog post
router.post('/posts', async (req, res) => {
    const { title, coverURL, videoURL, content } = req.body;
  
    // Validate the request body
    if (!title || !coverURL || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      // Create a new blog post document
      const newPost = new BlogPost({ title, coverURL, videoURL, content });
      // Save it to the database
      await newPost.save();
      res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  //EDIT BlogPost by ID

  router.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, coverURL, videoURL, content } = req.body;
  
    try {
      const updatedPost = await BlogPost.findByIdAndUpdate(
        id,
        { title, coverURL, videoURL, content },
        { new: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
  
      res.status(200).json({ message: 'Blog post updated successfully', post: updatedPost });
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ message: 'Server error while updating post' });
    }
  });
  

  // DELETE route to delete a blog post by ID
router.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the blog post by ID and delete it
      const deletedPost = await BlogPost.findByIdAndDelete(id);
  
      // If no post was found, return a 404 error
      if (!deletedPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
  
      res.status(200).json({ message: 'Blog post deleted successfully', post: deletedPost });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ message: 'Server error while deleting post' });
    }
  });
  

export default router;