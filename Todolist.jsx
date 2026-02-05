import React from 'react';
import '../assets/css/todolist.css';
import {useState} from 'react';
import Button from './Button';

const TodoList = ({inputRef}) => {
  const [todo, setTodo] = useState('');

  const [list, setList] = useState([
    {
      id: 1,
      deskripsi: 'Belajar ReactJs',
      done: false,
    },
  ]);

  const addTodoHandler = () => {
    const data = {
      id: Date.now(),
      deskripsi: todo,
      done: false,
    };

    setList([...list, data]);

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
  };

  const deleteTodoHandler = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const finishedCount = list.filter((item) => item.done).length;

  return (
    <div className="card todo-section">
      <h3>My Tasks</h3>
      <p>Todolist selesai {finishedCount} / {list.length}</p>

      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          placeholder="Tulis tugas baru..."
          onInput={(e) => setTodo(e.target.value)}
        />
        <Button type='button' variant='primary' onClick={()=> addTodoHandler()}>
          Add
        </Button>
      </div>
      <ul id="todo-list" className="todo-list">
        {list.map((element, index) => {
          return (
            <li key={element.id} className={element.done ? 'done' : ''}>
              <span className={element.done ? 'text-done' : ''}>
                <b>{index + 1}</b> {element.deskripsi}
              </span>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
