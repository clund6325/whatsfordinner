import React, { useState } from 'react';
import axios from 'axios';

export const RecipeContext = React.createContext();
export const RecipeConsumer = RecipeContext.Consumer;

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  const getAllRecipes = ( planId ) => {
    axios.get(`/api/plans/${planId}/recipes`)
    .then( res => {
      setRecipes(res.data)
    })
    .catch( err => console.log(err))
  }

  const addRecipe = (planId, recipe) => {
    axios.post(`/api/plans/${planId}/recipes`, { recipe })
      .then( res => {
        setRecipes([...recipes, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateRecipe = (planId, id, recipe, history) => {
    axios.put(`/api/plans/${planId}/recipes/${id}`, {recipe})
      .then( res => {
        const updatedRecipes = recipes.map( r => {
          if (r.id === id) {
            return res.data
          }
          return r
        })
        setRecipes(updatedRecipes)
        history.push(`/plans/${planId}/recipes`)
      })
      .catch( err => console.log(err))
  }

  const deleteRecipe = (planId, id, history) => {
    axios.delete(`/api/plans/${planId}/recipes/${id}`)
      .then( res => {
        setRecipes(recipes.filter( r => r.id !== id))
        alert(res.data.message)
        history.push(`/plans/${planId}/recipes`)
      })
      .catch( err => console.log(err))
  }

  
  return(
    <RecipeContext.Provider value={{
      recipes,
      getAllRecipes: getAllRecipes,
      addRecipe: addRecipe,
      updateRecipe: updateRecipe,
      deleteRecipe: deleteRecipe
    }}>
      {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider;