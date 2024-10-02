import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="w-full flex justify-center md:justify-end">
      <button
        type="button"
        onClick={handleLogout}
        className="focus:outline-none text-white bg-mytharra-purple hover:bg-mytharra-purple-dark focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-8 py-4 m-4 w-fit dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 md:whitespace-nowrap"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
