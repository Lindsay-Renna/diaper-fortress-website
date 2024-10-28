import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LogoutButton from '../Components/LogoutButton';
import NotAuthorized from '../Components/NotAuthorized';
import { useAuth } from '../hooks/AuthProvider';

const API_URL = import.meta.env.VITE_API_URL;
const devUsername = import.meta.env.VITE_DEV_USERNAME;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function AdminPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useAuth();

  const getBlogPosts = async () => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/blog/posts`);
      console.log(data);
      setBlogPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/blog/posts/${postId}`);
      console.log('Post deleted successfully:', response.data);
      setBlogPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== postId)
      );
    } catch (error) {
      console.error(
        'Error deleting post:',
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postId);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  if (!isAdmin) {
    return <NotAuthorized />;
  }

  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row sm:px-6 sm:gap-4 grow md:justify-center dark:bg-stone-900">
        <div className="px-4 pt-4 flex-grow max-w-screen-lg">
          <h1 className="text-black dark:text-white text-xl my-6">
            Hello, Ryan.
          </h1>
          <div className="relative overflow-x-auto">
            {isLoading ? (
              <p className="text-center py-4">Loading...</p>
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
                <thead className="text-stone-700 uppercase bg-stone-300 dark:bg-stone-700 dark:text-stone-400 text-lg">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left hidden sm:table-cell"
                    >
                      Date Posted
                    </th>
                    <th scope="col" className="py-3"></th>
                    <th scope="col" className="py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts.map((post) => (
                    <tr
                      className="bg-white border-b dark:bg-stone-800 dark:border-stone-700"
                      key={post._id}
                    >
                      <th
                        scope="row"
                        className="text-lg px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
                      >
                        {post.title}
                      </th>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4">
                        <Link to={`/admin/edit/${post._id}`}>
                          <img
                            className="w-5 m-2 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                            src="/icons/pencil.png"
                            alt="edit icon"
                          />
                        </Link>
                      </td>
                      <td className="py-4">
                        <img
                          className="min-w-5 w-5 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                          src="/icons/delete.svg"
                          alt="delete icon"
                          onClick={() => handleDelete(post._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="text-center m-4 md:my-8">
          <Link to="/admin/compose">
            <button
              type="button"
              className="focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 mb-3 md:min-w-min dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:whitespace-nowrap"
            >
              Add a Blog Post
            </button>
          </Link>
        </div>
      </div>
      <LogoutButton />
    </>
  );
}

export default AdminPage;
