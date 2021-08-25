import { useEffect } from 'react';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeList = ({ planId, recipes, getAllRecipes }) => {
  useEffect( () => {
    getAllRecipes(planId)
  }, [])

  return(
    <>
      <ListGroup>
        { recipes.map( r =>
          <Link to={{
            pathname: "/plans/" + planId + "/recipes/" + r.id,
            state: {...r}
          }}>
            <ListGroup.Item>{r.title}</ListGroup.Item>
          </Link>
          )}
      </ListGroup>
    </>
  )
}

const ConnectedRecipeList = (props) => (
  <RecipeConsumer>
    { value => <RecipeList {...props} {...value} />}
  </RecipeConsumer>
)

export default ConnectedRecipeList;