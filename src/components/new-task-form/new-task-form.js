import React, { useState } from "react";
import './new-task-form.css';

function NewTaskForm({ onTaskAdded }) {
  const [description, setDescription] = useState(''); 

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && description.trim()) {
      onTaskAdded(description.trim()); 
      setDescription(''); 
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
        onKeyDown={handleKeyDown} 
      />
    </header>
  );
}

export default NewTaskForm;
