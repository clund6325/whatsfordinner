import { Jumbotron } from 'react-bootstrap';
import PlanList from './PlanList';

const Plans = () => {
  return(
    <>
      <Jumbotron>
        <h1>Plans Page</h1>
      </Jumbotron>
      <PlanList/>
    </>
  )
}

export default Plans;