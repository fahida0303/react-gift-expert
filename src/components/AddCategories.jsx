import { useState } from "react";

export const AddCategories = ({ onNewCategory }) => {

 const [inputValue, setInputValue] = useState('')

 const onInputChange = (event) =>{
  
  //console.log(event.target.value)
  setInputValue(event.target.value);
 }

 const onSubmit = (event) => {
   event.preventDefault();
   if (inputValue.trim().length <= 1) return;
   //setCategory(categories => [inputValue, ...categories])
   onNewCategory(inputValue.trim())
   setInputValue('')
   //console.log(inputValue)
 }

  return (
  <form onSubmit={(event) => onSubmit(event)}>
    <input 
        type="text" 
        placeholder="Buscar gifs"  
        value={ inputValue } 
        onChange={ onInputChange }
          ></input>
  </form>
  )
};
