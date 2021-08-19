import React, { useEffect } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import ConnectedRegister from '../auth/Register';

const Recipes = ({ getAllRecipes, planId, match }) => {
  useEffect( () => {
    getAllRecipes(planId)
  }, [])

  return(
    <div>
      <RecipeList planId={match.params.planId} />
    </div>
  )
}

const ConnectedRecipes = (props) => (
  <RecipeConsumer>
    { value => <Recipes {...props} {...value} />}
  </RecipeConsumer>
)

export default ConnectedRecipes;