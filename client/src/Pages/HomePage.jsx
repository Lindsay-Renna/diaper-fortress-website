import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from '../Components/BlogCard';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function HomePage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayLimit, setDisplayLimit] = useState(5);

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

  const loadMorePosts = () => {
    setDisplayLimit((prevLimit) => prevLimit + 5);
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <main className="flex-grow">
      <div id="hero" className="relative flex min-h-screen -mt-20 -z-10">
        <div className="absolute inset-0 bg-[url('https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava.png')] bg-auto bg-no-repeat bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-black w-full flex flex-col grow justify-center items-center text-3xl gap-8">
          <h1 className="text-8xl drop-shadow-2xl text-white">
            Build, Play, Thrive.
          </h1>
          <p className="drop-shadow-lg text-white">
            Where Tiny Heroes Conquer Big Adventures!
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-zinc-300 dark:bg-zinc-900"></div>
      <h1 className="spicy text-center bg-zinc-50 dark:bg-zinc-900 text-[clamp(2.5rem,7vw,4rem)] pt-14 shadow-black shadow-lg">
        From the Developer
      </h1>
      <div
        id="Blog-list"
        className="p-1 flex flex-col gap-8 items-center w-full sm:p-12 bg-zinc-50 dark:bg-zinc-900"
      >
        {isLoading && <h1>Loading...</h1>}

        {!isLoading &&
          blogPosts
            .slice(0, displayLimit)
            .map((post) => (
              <BlogCard
                key={post._id}
                imageSrcPath={post.coverURL}
                title={post.title}
                description={post.content}
                date={post.createdAt.slice(0, 10)}
                author="Ryan Renna"
              />
            ))}

        {!isLoading && displayLimit < blogPosts.length && (
          <button
            onClick={loadMorePosts}
            className="mt-8 px-4 py-2 bg-mytharra-purple text-white rounded-lg hover:bg-mytharra-purple-dark"
          >
            Load More
          </button>
        )}
      </div>
    </main>
  );
}

export default HomePage;
