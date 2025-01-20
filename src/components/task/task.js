import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  render() {
    const { description, created, completed, onDeleted, onToggleCompleted } = this.props;

    return (
      <li className={completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onToggleCompleted}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}

export default Task;
