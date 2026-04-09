import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Upgraded InputField to handle the red required asterisk
const InputField = ({ label, type, placeholder, value, onChange, required = false }) => {
  return (
    <div className="relative mb-3">
      <fieldset className="border border-gray-300 rounded-md px-3 pb-2 pt-1 focus-within:border-popx-purple focus-within:border-2 transition-colors duration-200">
        <legend className="text-xs font-semibold text-popx-purple px-1">
          {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        </legend>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none text-[15px] text-gray-900 placeholder-gray-800 bg-transparent font-medium"
        />
      </fieldset>
    </div>
  );
};

function Signup() {
  const navigate = useNavigate();
  
  // State for all form fields
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
  });
  const [isAgency, setIsAgency] = useState('yes'); // Defaults to 'yes' based on design

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Navigate to the profile screen AND pass the form data along in the background
    navigate('/profile', { 
      state: { 
        fullName: formData.fullName, 
        email: formData.email 
      } 
    });
  };

  return (
    <div className="h-full bg-white p-6 pt-10 flex flex-col">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-gray-900 mb-2 leading-tight">
          Create your <br /> PopX account
        </h1>
      </div>

      <form onSubmit={handleSignup} className="flex flex-col flex-1">
        {/* Input Fields based on the exact placeholder text in the design */}
        <InputField label="Full Name" type="text" placeholder="Marry Doe" required value={formData.fullName} onChange={(e) => handleChange(e, 'fullName')} />
        <InputField label="Phone number" type="tel" placeholder="Marry Doe" required value={formData.phone} onChange={(e) => handleChange(e, 'phone')} />
        <InputField label="Email address" type="email" placeholder="Marry Doe" required value={formData.email} onChange={(e) => handleChange(e, 'email')} />
        <InputField label="Password" type="password" placeholder="Marry Doe" required value={formData.password} onChange={(e) => handleChange(e, 'password')} />
        <InputField label="Company name" type="text" placeholder="Marry Doe" value={formData.company} onChange={(e) => handleChange(e, 'company')} />

        {/* Custom Radio Button Group */}
        <div className="mt-2 mb-8">
          <label className="block text-[13px] font-semibold text-gray-900 mb-2">
            Are you an Agency?<span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex gap-6">
            
            {/* "Yes" Radio */}
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" name="agency" value="yes" 
                  checked={isAgency === 'yes'} onChange={(e) => setIsAgency(e.target.value)} 
                  className="peer appearance-none w-18px h-18px border-1.5px border-gray-400 rounded-full checked:border-popx-purple cursor-pointer transition-colors"
                />
                <div className="absolute w-2.5 h-2.5 bg-popx-purple rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <span className="text-[15px] text-gray-900">Yes</span>
            </label>

            {/* "No" Radio */}
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="radio" name="agency" value="no" 
                  checked={isAgency === 'no'} onChange={(e) => setIsAgency(e.target.value)} 
                  className="peer appearance-none w-18px h-18px border-1.5px border-gray-400 rounded-full checked:border-popx-purple cursor-pointer transition-colors"
                />
                <div className="absolute w-2.5 h-2.5 bg-popx-purple rounded-full opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <span className="text-[15px] text-gray-900">No</span>
            </label>

          </div>
        </div>

        {/* Note: mt-auto pushes the button to the very bottom of the flex container */}
        <button
          type="submit"
          className="w-full mt-auto mb-2 bg-popx-purple text-white py-3.5 rounded-md font-semibold text-[15px] hover:bg-purple-700 transition-colors shadow-sm"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;