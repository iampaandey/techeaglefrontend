import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = ({ onLoginClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log({ email, password, confirmPassword });
  };

  return (
    <div className="mt-8 bg-gray-100 flex items-center justify-center font-sans p-4">
         <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already registered?{' '}
     <Link to='/login'> <button
          onClick={onLoginClick}
          className="text-indigo-500 hover:underline"
        >
          Login
        </button>
        </Link>  
      </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
