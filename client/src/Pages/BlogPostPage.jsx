import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../Components/BlogPost';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function BlogPostPage() {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { postID } = useParams();

  const getSingleBlogPost = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/blog/posts/${postID}`);
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
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <div className="flex justify-center p-4">
        <BlogPost blogPost={blogPost} />
      </div>
    </div>
  );
}

export default BlogPostPage;
