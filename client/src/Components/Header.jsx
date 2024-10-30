import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAdmin } = useAuth();

  return (
    <div className="bg-stone-800 bg-opacity-80 backdrop-blur-md sticky top-0 left-0 right-0 flex items-center justify-between py-6 px-4 z-10 transition-opacity">
      <Link to="/">
        <img
          className="w-40 transform transition duration-300 hover:scale-105"
          src="/icons/mytharra.png"
          alt="Mytharra logo"
        />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] font-oswald">
              <li className="border-b border-gray-400 my-8 uppercase hover:text-stone-600">
                <Link to="/" onClick={() => setIsNavOpen(false)}>
                  Blog
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-stone-600 ">
                <Link to="/wishlist" onClick={() => setIsNavOpen(false)}>
                  Wishlist
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-stone-600">
                <Link to="/media" onClick={() => setIsNavOpen(false)}>
                  Media
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-stone-600">
                <Link to="/about" onClick={() => setIsNavOpen(false)}>
                  About
                </Link>
              </li>
              {isAdmin && (
                <li className="text-purple-800 border-b border-gray-400 my-8 uppercase hover:text-stone-600">
                  <Link to="/admin" onClick={() => setIsNavOpen(false)}>
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-2 font-oswald">
          <li>
            <Link className="text-white hover:text-gray-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/wishlist">
              Wishlist
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/media">
              Media
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-gray-300" to="/about">
              About
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link className="text-purple-300 hover:text-gray-300" to="/admin">
                Admin
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
		opacity:100%;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
