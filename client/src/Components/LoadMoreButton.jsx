import '../main.css';
import React from 'react';

function LoadMoreButton({ loadMorePosts }) {
  return (
    <button
      onClick={loadMorePosts}
      className="group w-[250px] my-8 px-2 py-2 bg-mytharra-purple hover:bg-mytharra-purple-dark text-white rounded-lg flex items-center"
    >
      <div className="bg-mytharra-purple-dark p-2 rounded group-hover:bg-mytharra-purple">
        <img
          className="w-5 h-5 bounce-arrow"
          src="/icons/down-arrow.svg"
          alt="Down arrow"
        />
      </div>
      <span className="flex-grow">Load More</span>
    </button>
  );
}

export default LoadMoreButton;
