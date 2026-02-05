import React, { useRef, useEffect, useState } from 'react';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/TodoList';

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <section className="app-container">
      <ProfileCard setIsDarkMode={setIsDarkMode} />
      <TodoList inputRef={inputRef} />
    </section>
  );
};

export default ProfileTodo;