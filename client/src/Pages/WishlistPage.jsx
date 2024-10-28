import axios from 'axios';
import { useState } from 'react';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function WishlistPage() {
  const [email, setEmail] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER_URL}/wishlist`, { email });
      setShowSuccessPopup(true);
      setEmail('');
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2000);

      console.log('Email submitted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <main className="flex flex-col flex-grow">
      <div className="flex flex-grow flex-col">
        <div className="relative flex min-h-80 sm:min-h-96">
          <div className="absolute inset-0 bg-[url('https://cdn.mos.cms.futurecdn.net/9GTJo42N2uEr99T8Svxava.png')] bg-auto bg-no-repeat bg-center opacity-50"></div>

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative -bottom-16 w-full flex items-end justify-center">
            <a
              href="https://store.steampowered.com/app/37230/Diaper_Dash/"
              target="_blank"
              rel="noopener noreferrer"
              className=" min-h-[130px] flex items-center justify-center text-center text-[clamp(2.5rem,7vw,4rem)] min-w-fit shadow-md text-white border rounded-lg bg-mytharra-purple p-4 hover:bg-mytharra-purple-dark transition-colors"
            >
              Wishlist on Steam
            </a>
          </div>
        </div>
        <div className="text-black dark:text-white dark:bg-stone-900 flex flex-col justify-center items-center grow pt-12">
          <h1 className="text-3xl mt-10"> - or -</h1>
          <form
            className="w-1/2 flex flex-col sm:flex-row gap-8 sm:justify-center sm:items-center my-8 min-w-60"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              id="email"
              value={email}
              className="bg-gray-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:grow max-w-96"
              placeholder="name@example.com"
              onChange={handleEmailChange}
              required
            />

            <button
              type="submit"
              className="pulse-purple focus:outline-none text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-lg px-8 py-2 dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-900 min-w-fit sm:text-xl"
            >
              Notify Me!
            </button>
          </form>
          {showSuccessPopup && (
            <div className="fixed center bottom-4 p-4 bg-purple-500 text-white rounded-lg shadow-lg">
              Your email has been added successfully!
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default WishlistPage;
