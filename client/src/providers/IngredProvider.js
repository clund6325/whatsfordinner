import React, { useState } from 'react';
import axios from 'axios';

export const IngredContext = React.createContext();
export const IngredConsumer = IngredContext.Consumer;

const IngredProvider = ({ children }) => {
  const [ingreds, setIngreds] = useState([])

  const getAllIngreds = (recipeId) => {
    axios.get(`/api/recipes/${recipeId}/ingreds`)
      .then( res => {
        setIngreds(res.data)
      })
      .catch( err => console.log(err))
  }

  const addIngred = (recipeId, ingred) => {
    axios.post(`/api/recipes/${recipeId}/ingreds`, {ingred} )
      .then( res => {
        setIngreds([...ingreds, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateIngred = (recipeId, id, ingred, history) => {
    axios.put(`/api/recipes/${recipeId}/ingreds/${id}`, {ingred} )
      .then( res => {
        const updatedIngreds = ingreds.map( i => {
          if (i.id === id) {
            return res.data
          }
          return i
        })
        setIngreds(updatedIngreds)
        history.push(`/recipes/${recipeId}/ingreds`)
      })
      .catch( err => console.log(err))
  }

  const deleteIngred = (recipeId, id, history) => {
    axios.delete(`/api/recipes/${recipeId}/ingreds/${id}`)
      .then( res => {
        setIngreds(ingreds.filter( i => i.id !== id))
        alert( res.data.message)
        history.push(`/recipes/${recipeId}/ingreds`)
      })
      .catch( err => console.log(err))
  }

  return(
    <IngredContext.Provider value={{
      ingreds,
      getAllIngreds: getAllIngreds,
      addIngred: addIngred,
      updateIngred: updateIngred,
      deleteIngred: deleteIngred,
    }}>
      {children}
    </IngredContext.Provider>
  )
}

export default IngredProvider;