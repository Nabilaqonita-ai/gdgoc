import React from 'react';
import ProfileCard from '../components/ProfileCard.jsx';

export default function ProfilePage({ setIsDarkMode }) {
  const stored = localStorage.getItem('auth');
  const user = stored ? JSON.parse(stored) : null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div>
        <ProfileCard setIsDarkMode={setIsDarkMode} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Account</h3>
        {user ? (
          <div>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No account saved. Please login.</p>
        )}
      </div>
    </div>
  );
}
