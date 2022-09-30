import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../Components/TodoCounter.js';
import { TodoSearch } from '../Components/TodoSearch.js';
import { TodoList } from '../Components/TodoList.js';
import { CreateTodoButton } from '../Components/CreateTodoButton.js';
import { TodoItem } from '../Components/TodoItem.js';

function AppUI() {
  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo 
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

        <TodoList>
          { error && <p>Desespérate, hubo un error...</p>}
          { loading && <p>Estamos cargando, no te desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer todo...!</p>}
  
          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };