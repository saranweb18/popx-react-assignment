import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="relative mb-4">
      <fieldset className="border border-gray-300 rounded-md px-3 pb-2 pt-1 focus-within:border-popx-purple focus-within:border-2 transition-colors duration-200">
        <legend className="text-xs font-semibold text-popx-purple px-1">
          {label}
        </legend>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none text-[15px] text-gray-900 placeholder-gray-400 bg-transparent"
        />
      </fieldset>
    </div>
  );
};

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormFilled = email.length > 0 && password.length > 0;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormFilled) {
      // Extract the text before the '@' symbol to use as a dynamic name
      const extractedName = email.split('@')[0];
      
      // Pass both the generated name and the typed email to the Profile screen
      navigate('/profile', { 
        state: { 
          fullName: extractedName, 
          email: email 
        } 
      }); 
    }
  };

  return (
    <div className="h-full bg-white p-6 pt-10 flex flex-col">
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-gray-900 mb-3 leading-tight">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-gray-500 text-[15px] leading-relaxed pr-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} className="flex flex-col flex-1">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={!isFormFilled}
          className={`w-full mt-2 py-3.5 rounded-md font-semibold text-[15px] transition-colors ${
            isFormFilled 
              ? 'bg-popx-purple text-white hover:bg-purple-700' 
              : 'bg-#CBC3E3 text-white cursor-not-allowed'
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;