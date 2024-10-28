import { Router } from "express";
import WishList from '../models/Wishlist.js';


const router = Router();

// POST route to add email to database
router.post('/', async (req, res) => {
    const { email } = req.body;
  
    // Validate the request body
    if (!email) {
      return res.status(400).json({ message: 'Missing email' });
    }
  
    try {      
      const newEmail = new WishList({email});
      
      await newEmail.save();
      res.status(201).json({ message: 'Email added successfully', email: newEmail });
    } catch (error) {
      console.error('Error adding email:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


export default router;