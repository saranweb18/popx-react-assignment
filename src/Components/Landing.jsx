import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-end p-6 pb-12 bg-white">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-gray-900 mb-3 leading-tight">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed pr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-popx-purple text-white py-3.5 rounded-md font-semibold text-[15px] hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate('/login')}
          className="w-full bg-popx-light-purple text-gray-900 py-3.5 rounded-md font-semibold text-[15px] hover:bg-purple-300 transition-colors"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Landing;