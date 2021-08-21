import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import PlanForm from './PlanForm';
import { PlanConsumer } from '../../providers/PlanProvider';
import RecipeList from '../recipes/RecipeList';

const PlanShow = ({ location, match, deletePlan, history }) => {
  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  return(
    <>
      <h1>{location.state.week_day}</h1>
      <p>Meal: {location.state.meal}</p>
      <p>Theme: {location.state.theme}</p>
      <Button variant="warning" onClick={() => handleEditShow()}>Edit</Button>
      {''}
      <Button variant="danger" onClick={() => deletePlan(match.params.id, history)}>Delete</Button>
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>{location.state.week_day} Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PlanForm { ...location.state } handleEditClose={handleEditClose}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <RecipeList planId={location.state.id} />
    </>
  )
}

const ConnectedPlanShow = (props) => (
  <PlanConsumer>
    { value => <PlanShow {...props} {...value} />}
  </PlanConsumer>
)

export default ConnectedPlanShow;