import React, { useState, useRef, useEffect } from 'react';
import TodoList from '../components/Todolist.jsx';

export default function TodoPage(){
  const inputRef = useRef(null);

  return (
    <div>
      <TodoList inputRef={inputRef} />
    </div>
  )
}
