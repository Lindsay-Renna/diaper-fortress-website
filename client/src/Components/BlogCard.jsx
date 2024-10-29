import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function BlogCard({ imageSrcPath, title, date, description, author, id }) {
  const truncatedDescription =
    description.length > 250 ? `${description.slice(0, 250)}...` : description;

  return (
    <div className="max-w-screen-lg w-full text-white">
      <h2 className="ml-1 mb-2 mt-4 text-stone-400 dark:text-gray-200">
        {date} <span className="hidden sm:inline">- Written by {author}</span>
      </h2>
      <div className="border-black dark:border-zinc-900 border-solid border-2 rounded-lg flex flex-col w-full bg-zinc-800">
        <div className="w-full overflow-hidden rounded-t-lg">
          <img
            className="w-full h-full"
            src={
              imageSrcPath
                ? `${imageSrcPath}`
                : 'client/public/icons/images/default-image.png'
            }
            alt={title}
          />
        </div>
        <div className="p-4">
          <Link className="" to={`/post/${id}`}>
            <h1 className="text-lg md:text-3xl mb-4 hover:underline hover:decoration-purple-500">
              {title}
            </h1>
          </Link>
          <p className="text-md md:text-xl opacity-70">
            {truncatedDescription}
          </p>
        </div>
        <div className=" p-4 buttons flex gap-5 text-purple-300">
          <p className="hover:text-mytharra-purple-dark">SHARE</p>
          <Link
            className="hover:text-mytharra-purple-dark"
            to={`/post/${id}`}
            target="blank"
          >
            <p>READ MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
