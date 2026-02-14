import React, { useState, useRef, useEffect } from 'react';
import './assets/css/todolist.css';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/Todolist';

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app-container">
      <ProfileCard setIsDarkMode={setIsDarkMode} />
      <TodoList inputRef={inputRef} />
    </div>
  );
};

export default ProfileTodo;