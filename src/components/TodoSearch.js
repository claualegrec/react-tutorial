import React from 'react';
import '../styles/TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

  const[] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className='TodoSearch' 
      placeholder='Busca un todo'
      value={ searchValue }
      onChange={ onSearchValueChange }
    />
  );
}

export { TodoSearch };