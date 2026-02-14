import React, { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import TodoPage from './pages/TodoPage';

export default function App() {
  const [route, setRoute] = useState('todo');
  const [auth, setAuth] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (stored) setAuth(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setAuth(null);
    setRoute('login');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('inverted');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('inverted');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-4xl mx-auto flex gap-4">
          <button className="px-3 py-1 rounded hover:bg-gray-100" onClick={() => setRoute('profile')}>Profile</button>
          <button className="px-3 py-1 rounded hover:bg-gray-100" onClick={() => setRoute('todo')}>Todo</button>
          <button className="ml-auto px-3 py-1 rounded hover:bg-gray-100" onClick={() => setRoute('login')}>Login</button>
          {auth && (
            <button
              className="px-3 py-1 rounded text-sm bg-red-700 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        {route === 'login' && <LoginPage onLogin={(u) => { setAuth(u); setRoute('profile'); }} />}
        {route === 'profile' && <ProfilePage setIsDarkMode={setIsDarkMode} />}
        {route === 'todo' && <TodoPage />}
      </main>
    </div>
  );
}
