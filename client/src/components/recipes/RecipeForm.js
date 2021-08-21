import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { withRouter } from 'react-router-dom';
import { Fragment } from 'react';

const RecipeForm = ({ addRecipe, id, title, description, serving, updateRecipe, handleEditClose, history }) => {
  const [recipe, setRecipe] = useState({ title: "", description: "", serving: "" })

  useEffect( () => {
    if(id) {
      setRecipe({title, description, serving})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecipe({...recipe})
    if (id) {
      updateRecipe(id, recipe, history)
      handleEditClose()
    }
    else{
      addRecipe(recipe)
    }
    setRecipe({ title: "", description: "", serving: "" })
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          name="title"
          value={recipe.title}
          onChange={(e) => setRecipe({...recipe, title: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="description"
          name="description"
          value={recipe.description}
          onChange={(e) => setRecipe({...recipe, description: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicServing">
        <Form.Label>Serving Size</Form.Label>
        <Form.Control
          type="text"
          placeholder="serving size"
          name="serving"
          value={recipe.serving}
          onChange={(e) => setRecipe({...recipe, serving: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default RecipeForm;