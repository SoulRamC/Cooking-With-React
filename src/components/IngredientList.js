import React from 'react'
import Ingredient from './Ingredient'
export default function IngredientList({ingredients}) {
    const IngredientElement = ingredients.map(ingredients =>{
        return (<Ingredient key={ingredients.id} {...ingredients} />
    )})
  return (
    <div className='ingredient--grid'>
        {IngredientElement}
    </div>
  )
}
