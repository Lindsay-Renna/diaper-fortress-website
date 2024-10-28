import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function BlogCard({ imageSrcPath, title, date, description, author }) {
  const truncatedDescription =
    description.length > 250 ? `${description.slice(0, 250)}...` : description;

  return (
    <div className="max-w-screen-lg w-full text-white">
      <h2 className="ml-1 mb-2 mt-4 text-gray-600">
        {date} <span className="hidden sm:inline">- Written by {author}</span>
      </h2>
      <div className="border-black border-solid border-2 rounded-lg flex flex-col w-full bg-zinc-800">
        <div className="w-full overflow-hidden">
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
          <h1 className="text-lg md:text-3xl mb-4">{title}</h1>
          <p className="text-md md:text-xl">{truncatedDescription}</p>
        </div>
        <div className=" p-4 buttons flex gap-5 text-mytharra-purple">
          <p className="hover:text-mytharra-purple-dark">SHARE</p>
          <Link className="hover:text-mytharra-purple-dark" target="blank">
            <p>READ MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
