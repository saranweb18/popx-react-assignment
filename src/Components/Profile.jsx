import React from 'react';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation

function Profile() {
  const location = useLocation(); // 2. Hook to access the passed state
  
  // 3. Extract the data. We use a fallback just in case someone goes directly to /profile
  const userName = location.state?.fullName || 'Marry Doe';
  const userEmail = location.state?.email || 'Marry@Gmail.Com';

  return (
    <div className="h-full bg-white flex flex-col">
      <div className="px-6 py-4 bg-white border-b border-gray-200">
        <h1 className="text-[18px] font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-5 mb-6">
          <div className="relative w-76px h-76px">
            <img 
              src="https://i.pravatar.cc/150?img=47" 
              alt="User Avatar" 
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-popx-purple w-7 h-7 rounded-full flex items-center justify-center border-2 border-white cursor-pointer hover:bg-purple-700 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            {/* 4. Use the dynamic state variables here instead of hardcoding */}
            <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
              {userName}
            </h2>
            <p className="text-[14px] font-medium text-gray-600 mt-0.5">
              {userEmail}
            </p>
          </div>
        </div>

        <p className="text-[14px] text-gray-500 leading-relaxed mb-8 pr-2">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className="border-t border-dashed border-gray-300 w-full mt-auto mb-10"></div>
      </div>
    </div>
  );
}

export default Profile;