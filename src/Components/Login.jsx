import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Welcome Back</h2>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
            />
          </div>
          {/* Button now wrapped in Link to navigate to /home */}
          <Link to="/home">
            <button type="button" className="w-full p-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-300">
              Login
            </button>
          </Link>
        </form>
        <p className="mt-4 text-center text-indigo-600 cursor-pointer hover:underline">Forgot your password?</p>
      </div>
    </div>
  );
}

export default LoginPage;
