import { Component } from 'react';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: 'Completed task',
        created: 'created 17 seconds ago',
        completed: false,
      },
      {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
        completed: false,
      },
      {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
        completed: false,
      },
    ],
    filter: 'All', 
  };

  addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      created: 'just now',
      completed: false,
    };

    this.setState(({ tasks }) => ({
      tasks: [...tasks, newTask],
    }));
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => task.id !== id),
    }));
  };

  clearCompleted = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.completed),
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  filterTasks = () => {
    const { tasks, filter } = this.state;
    if (filter === 'Active') return tasks.filter((task) => !task.completed);
    if (filter === 'Completed') return tasks.filter((task) => task.completed);
    return tasks; // All
  };

  render() {
    const { filter } = this.state;
    const filteredTasks = this.filterTasks();
    const activeCount = this.state.tasks.filter((task) => !task.completed).length;

    return (
      <section className="todoapp">
        <NewTaskForm onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.toggleTaskCompletion}
          />
        </section>
        <Footer
          activeCount={activeCount}
          filter={filter}
          onFilterChange={this.setFilter}
          onClearCompleted={this.clearCompleted}
        />
      </section>
    );
  }
}

export default App;
