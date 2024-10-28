import BlogEditor from '../Components/BlogEditor';
import NotAuthorized from '../Components/NotAuthorized';
import { useAuth } from '../hooks/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function NewBlogPostPage() {
  const { isAdmin } = useAuth();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [coverURL, setCoverURL] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCoverImageURLChange = (e) => {
    setCoverURL(e.target.value);
    console.log('Cover URL:', e.target.value);
  };

  const handleVideoURLChange = (e) => {
    setVideoURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, coverURL, videoURL, content };

    try {
      const response = await axios.post(`${SERVER_URL}/blog/posts`, newPost);
      console.log('Server response:', response.data);
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/admin');
      }, 2000);
      console.log('Post submitted successfully');
    } catch (error) {
      console.error(
        'Error:',
        error.response ? error.response.data : error.message
      );
      console.log('There was an issue submitting your post ☹');
    }
  };

  return (
    <div className="p-4">
      <p className="mb-4">Hello, let's write a blog post today 😃</p>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title ..."
          className="mb-4 bg-gray-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:grow max-w-5xl"
          required
          onChange={handleTitleChange}
        />
        <label
          htmlFor="coverURL"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Preview Image
        </label>
        <input
          type="text"
          id="coverURL"
          value={coverURL}
          placeholder="Preview Image URL"
          className="mb-4 bg-gray-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:grow max-w-5xl"
          onChange={handleCoverImageURLChange}
        />
        {coverURL && (
          <img
            className="w-1/2 mb-4 rounded-md"
            src={coverURL}
            alt="BlogPost preview art"
          />
        )}
        <label
          htmlFor="coverURL"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Video URL
        </label>
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
          <div className="flex gap-10">
            <button
              type="submit"
              className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 my-3 md:min-w-min dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:whitespace-nowrap"
            >
              Submit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/admin');
              }}
              className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 my-3 md:min-w-min dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:whitespace-nowrap"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 p-4 bg-purple-500 text-white rounded-lg shadow-lg">
          Post submitted successfully!
        </div>
      )}
    </div>
  );
}

export default NewBlogPostPage;
