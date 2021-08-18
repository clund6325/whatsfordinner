import { useEffect } from 'react';
import { PlanConsumer } from '../../providers/PlanProvider';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlanList = ({ plans, getAllPlans }) => {
  useEffect( () => {
    getAllPlans()
  }, [])

  return(
    <>
      <ListGroup>
        {plans.map( p => 
          <Link to={{
            pathname: `/plans/${p.id}`,
            state: { ...p }
          }}>
            <ListGroup.Item>Plan for: {p.week_day}</ListGroup.Item>
          </Link>)}
      </ListGroup>
    </>
  )
}

const ConnectedPlanList = (props) => (
  <PlanConsumer>
    { value => <PlanList {...props} {...value} />}
  </PlanConsumer>
)

export default ConnectedPlanList;