import React from 'react'
import './App.css'
import TodoList from './Todolist/TodoList'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  appTitle: {
    textAlign: 'center'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant='h1' className={classes.appTitle}>Todo List React Rails</Typography>
        <hr/>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
