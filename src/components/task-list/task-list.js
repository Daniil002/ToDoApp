import React from 'react';
import Task from '../task/task';
import './task-list.css';

function TaskList({ tasks, onDeleted, onToggleCompleted }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          created={task.created}
          completed={task.completed}
          onDeleted={() => onDeleted(task.id)}
          onToggleCompleted={() => onToggleCompleted(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
