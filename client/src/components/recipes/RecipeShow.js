import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import RecipeForm from './RecipeForm';
import { RecipeConsumer } from '../../providers/RecipeProvider';
import { Link } from 'react-router-dom';

const RecipeShow = ({ location, match, deleteRecipe, history }) => {
  const [editShow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return(
    <>
      <h1>{location.state.title}</h1>
      <p>Description: {location.state.description}</p>
      <p>Serving: {location.state.serving}</p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {' '}
      <Button variant="danger" onClick={() => deleteRecipe(match.params.id)}>Delete</Button>
      {' '}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>{location.state.title} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeForm { ...location.state } handleEditClose={handleEditClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const ConnectedRecipeShow = (props) => (
  <RecipeConsumer>
    { value => <RecipeShow {...props} {...value} />}
  </RecipeConsumer>
)

export default ConnectedRecipeShow;