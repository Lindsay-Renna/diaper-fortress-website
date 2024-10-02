import React from 'react';
import { Link } from 'react-router-dom';

function NotAuthorized() {
  return (
    <section className="bg-gray-50 dark:bg-stone-900 grow items-center justify-center">
      <div className="flex flex-col items-center justify-center px-6 py-14 mx-auto">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-stone-800 dark:border-stone-700 flex flex-col items-center justify-center py-4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              You are not authorized to view this page. <br /> Please log in.
            </h1>
          </div>
          <Link to="/login" className="w-3/4">
            <button className="border-gray-300 border-2 text-black bg-primary-600 hover:bg-stone-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-stone-700 dark:focus:ring-primary-800 dark:text-white w-full">
              Go to login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotAuthorized;
