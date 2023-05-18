import { useState } from "react"
import { AddCategories, GifGrid } from "./components";

export const GifExportApp = () => {


  const [categories, setCategories] = useState(['One Puch']);
  
  //console.log(categories)
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
     //categories.push('Valorant')
     //setCategories([ ...categories, 'Valorant'])
     //console.log(newCategory)
     setCategories([newCategory, ...categories])
  }

  return (
    <>
     {/*titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategories 
      // setCategories={ setCategories }
      //CUANDO lleva un on esta emitiendo algo, on es  evento
      onNewCategory={(event) => onAddCategory(event)}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* Listado de Gif */}
        { categories.map(category => (
          <GifGrid 
           key={category} 
           category={category}/>
            )
          ) 
        }
         {/* Gif Item */}
    </>
  )
}
