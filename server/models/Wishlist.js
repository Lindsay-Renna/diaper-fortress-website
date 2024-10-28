import mongoose from 'mongoose';

const wishListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const WishList = mongoose.model('WishList', wishListSchema);

export default WishList;