import React from 'react'
import './App.css'
import TodoList from './Todolist/TodoList'
import Typography from '@material-ui/core/Typography'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h1'>Todo List React Rails</Typography>
        <hr/>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
