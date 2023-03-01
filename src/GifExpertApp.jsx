import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  const handleAddCategory = (value) => {
    setCategories([...categories,  value]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => handleAddCategory(value) }
      />

      <ol>
        {
          categories.map( category => {
            return <GifGrid key={category} category={category}> </GifGrid>
          })
        }
      </ol>
    </>
  )
}