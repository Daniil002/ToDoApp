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
      },
      {
        id: 2,
        description: 'Editing task',
        created: 'created 5 minutes ago',
      },
      {
        id: 3,
        description: 'Active task',
        created: 'created 5 minutes ago',
      },
    ],
  };

  addTask = (description) => {
    const newTask = {
      id: Date.now(), // Уникальный ID
      description,
      created: 'just now', // Можно добавить точное время
      completed: false, // Пока задача не выполнена
    };
  
    this.setState(({ tasks }) => ({
      tasks: [...tasks, newTask], // Добавляем новую задачу в массив
    }));
  };
  

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const newTasks = tasks.filter(task => task.id !== id);
      return { tasks: newTasks };
    });
  };

  // Метод render должен быть внутри класса
  render() {
    const { tasks } = this.state;
    return (
      <section className="todoapp">
        <NewTaskForm onTaskAdded={this.addTask} />
        <section className="main">
          <TaskList
          tasks={tasks}
          onDeleted={ this.deleteItem } />
        </section>
        <Footer />
      </section>
    );
  }
}

export default App;
