import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile'; // 1. Import Profile

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div
          className="bg-white shadow-2xl relative overflow-hidden flex flex-col rounded-[30px] border border-gray-200"
          style={{ width: '100%', maxWidth: '375px', height: '812px' }}
        >
          <div className="flex-1 overflow-y-auto w-full relative scrollbar-hide">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} /> {/* 2. Add Profile Route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;