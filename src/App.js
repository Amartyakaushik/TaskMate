import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [todos,setTodos] = useState([
    {id : 1, course : "App dev", completed : false},
    {id : 2, course : "web dev", completed : true},
    {id : 3, course : "ML", completed : false},
    {id : 4, course : "UI / UX", completed : true},
  ]);

  const addTodo = (newTodo) => {
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
    // setTodos((prevState) => {
    //   return [...prevState, newTodo]
    // })

    // console.log(newTodo)
  };

  const toggleCompleted = (id) =>{
    console.log(`toggled ${id}`);

    setTodos((prevState) => {
      return prevState.map((todo) => {
        if(todo.id === id){
          return {...todo, completed : !todo.completed}
        }else{
          return {...todo};
        }
      })
    })
  }
  // const newTodos = (id) =>{
  //   setTodos((prevState) =>{
  //     return prevState.map((todo) => {
  //       if(todo.id === id){
  //         return {...todo, completed : !todo.completed}
  //       }
  //     }
  //   })
  // }
  
  const removeTodo = (id) =>{
    setTodos((prevState) => {
      return (prevState.filter(todo => (todo.id !== id)))
    })
  }
  return (
    <div className="App">
      <ToastContainer />
      <h1 className="menu-title">TodoList</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos = {todos} toggleCompleted = {toggleCompleted} removeTodo = {removeTodo} />
    </div>
  );
}

export default App;


      {/* <TodoForm /> */}
      {/* <Todos todos = {todos} title = {" "}/> */}
      {/* <Todos todos = {todos} title = {" "}/> */}