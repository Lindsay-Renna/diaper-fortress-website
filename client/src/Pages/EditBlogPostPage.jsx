import BlogEditor from '../Components/BlogEditor';
import NotAuthorized from '../Components/NotAuthorized';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function EditBlogPostPage() {
  const { isAdmin } = useAuth();
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  const getBlogPost = async (postID) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/blog/posts/${postID}`);
      setTitle(data.title);
      setVideoURL(data.videoURL);
      setContent(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleVideoURLChange = (e) => {
    setVideoURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, videoURL, content };

    try {
      const response = await axios.put(
        `${SERVER_URL}/blog/posts/${id}`,
        updatedPost
      );
      console.log('Server response:', response.data);
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/admin');
      }, 2000);
      console.log('Post updated successfully');
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message
      );
      console.log('There was an issue submitting your post ☹');
    }
  };

  useEffect(() => {
    if (id) {
      getBlogPost(id);
    }
  }, [id]);

  return (
    <div className="p-4">
      <p className="mb-4">Hello, let's write a blog post today 😃</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title ..."
          className="mb-4 bg-gray-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:grow max-w-5xl"
          required
          onChange={handleTitleChange}
        />
        <input
          type="text"
          id="videoURL"
          value={videoURL}
          placeholder="Add a video...?"
          className="mb-4 bg-gray-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:grow max-w-5xl"
          onChange={handleVideoURLChange}
        />

        <div className="flex flex-col items-center w-full max-w-screen-xl">
          <BlogEditor content={content} setContent={setContent} />
          <button
            type="submit"
            className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 my-3 md:min-w-min dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:whitespace-nowrap"
          >
            Submit
          </button>
        </div>
      </form>
      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
          Post updated successfully!
        </div>
      )}
    </div>
  );
}

export default EditBlogPostPage;
