import React, { useState } from "react";
import './new-task-form.css';

function NewTaskForm({ onTaskAdded }) {
  const [description, setDescription] = useState(''); // Локальное состояние для ввода

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && description.trim()) {
      onTaskAdded(description.trim()); // Передаём описание задачи
      setDescription(''); // Сбрасываем поле ввода
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={description} // Привязываем к состоянию
        onChange={(e) => setDescription(e.target.value)} // Обновляем состояние при вводе
        onKeyDown={handleKeyDown} // Обрабатываем нажатие клавиши Enter
      />
    </header>
  );
}

export default NewTaskForm;
