import React from 'react';

function BlogPost({ blogPost }) {
  return (
    <div className="w-3/4">
      <h1>{blogPost.title}</h1>
      <div>{blogPost.content}</div>
    </div>
  );
}

export default BlogPost;
