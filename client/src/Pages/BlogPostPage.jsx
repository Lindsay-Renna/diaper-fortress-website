import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../Components/BlogPost';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BlogPostPage() {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { postID } = useParams();
  console.log('Post ID from useParams:', postID);

  const getSingleBlogPost = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/blog/posts/${postID}`);
      console.log(res.data);
      setBlogPost(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching blog post:', error);
    }
  };

  useEffect(() => {
    if (postID) {
      getSingleBlogPost();
    }
  }, [postID]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex justify-center p-4">
      <BlogPost blogPost={blogPost} />
    </div>
  );
}

export default BlogPostPage;
