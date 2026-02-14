import React, { useState, useEffect } from 'react';
import Button from './Button.jsx';

const TodoList = ({inputRef}) => {
  const [todo, setTodo] = useState('');

  const [list, setList] = useState(() => {
    try {
      const raw = localStorage.getItem('todos');
      return raw ? JSON.parse(raw) : [{ id: 1, deskripsi: 'Belajar ReactJs', done: false }];
    } catch (e) {
      return [{ id: 1, deskripsi: 'Belajar ReactJs', done: false }];
    }
  });

  const addTodoHandler = () => {
    const data = {
      id: Date.now(),
      deskripsi: todo,
      done: false,
    };

    setList(prev => {
      const next = [...prev, data];
      localStorage.setItem('todos', JSON.stringify(next));
      return next;
    });

    setTodo('');
  };

  const toggleDoneHandler = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  };

  const deleteTodoHandler = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    localStorage.setItem('todos', JSON.stringify(updatedList));
  };

  const finishedCount = list.filter((item) => item.done).length;
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h3 className="text-lg font-semibold">My Tasks</h3>
      <p className="text-sm text-gray-500">Todolist selesai {finishedCount} / {list.length}</p>

      <div className="mt-4 flex gap-2">
        <input
          ref={inputRef}
          value={todo}
          type="text"
          placeholder="Tulis tugas baru..."
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 px-3 py-2 rounded border bg-white text-black placeholder-gray-500"
        />
        <Button type='button' variant='primary' onClick={()=> addTodoHandler()}>Add</Button>
      </div>

      <ul id="todo-list" className="mt-4 space-y-2">
        {list.map((element, index) => {
          return (
            <li key={element.id} className="flex items-center justify-between gap-2">
              <div>
                <span className={element.done ? 'line-through text-gray-400' : ''}>
                  <b>{index + 1}</b> {element.deskripsi}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={element.done ? 'secondary' : 'primary'}
                  onClick={() => {
                    if (element.done) {
                      deleteTodoHandler(element.id);
                    } else {
                      toggleDoneHandler(element.id);
                    }
                  }}
                >
                  {element.done ? 'Hapus' : 'Selesai'}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;