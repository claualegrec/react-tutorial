import React from 'react';
import { TodoCounter } from '../components/TodoCounter.js';
import { TodoSearch } from '../components/TodoSearch.js';
import { TodoList } from '../components/TodoList.js';
import { CreateTodoButton } from '../components/CreateTodoButton.js';
import { TodoItem } from '../components/TodoItem.js';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        { error && <p>Desespérate, hubo un error...</p>}
        { loading && <p>Estamos cargando, no te desesperes...</p>}
        {/* {(!loading && searchedTodos.length)} */}

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