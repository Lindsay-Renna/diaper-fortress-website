import React from 'react';

function BlogPost({ blogPost }) {
  return (
    <div className="w-full md:w-3/4 max-w-screen-xl flex flex-col dark:text-white">
      <div className="flex mb-4 items-end">
        <h1 className="text-3xl lg:text-5xl flex-grow">{blogPost.title}</h1>
        <p className="text-xs opacity-50">{blogPost.createdAt.slice(0, 10)}</p>
      </div>
      <img className="rounded mb-4" src={blogPost.coverURL} alt="cover Art" />
      <div>{blogPost.content}</div>
    </div>
  );
}

export default BlogPost;
