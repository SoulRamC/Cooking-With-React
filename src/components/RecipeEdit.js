import React, {useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import {v4 as uuidv4} from 'uuid';
export default function RecipeEdit({selectedRecipe}) {
     const {handleRecipeChange, handleRecipeSelect} = useContext(RecipeContext)
  
     function handleChange(changes){
        handleRecipeChange(selectedRecipe.id, {...selectedRecipe, ...changes})
     }

     function handleIngredientChange(id, ingredient){
        const newIngredients = [...selectedRecipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === id)
    newIngredients[index] = ingredient
    handleChange({ingredients: newIngredients})
     }


     function handleIngredientAdd(){
        const newIngredients ={
            id: uuidv4(),
            name:'',
            amount:''
        }
        handleChange({ingredients: [...selectedRecipe.ingredients, newIngredients]})
     }

     function handleIngredientDelete(id){
        handleChange(
            {ingredients: selectedRecipe.ingredients.filter(i => i.id !== id)})
     }
     
     return (
    <div className='recipe--edit'>
        <div className='recipe--edit__remove--button--container'>
            <button
            onClick={()=> handleRecipeSelect(undefined)} 
            className='btn recipe--edit__remove--button'>&times;</button>
        </div>
        <div className='recipe--edit__details--grid'>
            <label htmlFor='name' 
            className='recipe--edit__label'>Name</label>
            <input value={selectedRecipe.name}
                onChange={e => handleChange({name: e.target.value})} 
            type="text" name="name" id="name"
             className='recipe--edit__input'></input>
            <label htmlFor='cookTime'
            className='recipe--edit__label'>Cook Time</label>
            <input value={selectedRecipe.cookTime} 
                onChange={e=> handleChange({cookTime: e.target.value})}
            type="text" name="cookTime" id="cookTime"
            className='recipe--edit__input'></input>
            <label htmlFor='servings'
            className='recipe--edit__label'>Servings</label>
            <input value={selectedRecipe.servings} 
                onChange={e=> handleChange({servings: parseInt(e.target.value) || ''})}
            type="number" min={1} name="servings" id="servings"
            className='recipe--edit__input'></input>
            <label htmlFor='instructions'
            className='recipe--edit__label'>Instructions</label>
            <textarea value={selectedRecipe.instructions} 
            onChange={e=> handleChange({instructions: e.target.value})}
            name='instructions' id='instructions'
            className='recipe--edit__input'></textarea>
        </div>
        <br />
        <label className='recipe--edit__label'>Ingredients</label>
        <div className='recipe--edit__ingredient--grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {selectedRecipe.ingredients.map(ingredient => {return (
                <RecipeIngredientEdit 
                handleIngredientChange={handleIngredientChange}
                handleIngredientDelete ={handleIngredientDelete}
                key={ingredient.id} ingredient={ingredient}></RecipeIngredientEdit>
            )})}
            
        </div>
        <div className='recipe--edit__add--ingredient--btn--container'>
            <button
                onClick={()=> handleIngredientAdd()}
             className='btn btn--primary'>Add Ingredients</button>
        </div>
    </div>
  )
}
