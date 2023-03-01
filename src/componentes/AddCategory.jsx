import { useState } from "react";


export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('Naruto')

  const handleInputChange = ( event ) => {
    setInputValue(event.target.value);    
  }

  const handleOnSubmit = ( event ) => {
    event.preventDefault();
    onNewCategory( inputValue );
    setInputValue('');
  }

  return (
    <form onSubmit={handleOnSubmit} >
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  );
}