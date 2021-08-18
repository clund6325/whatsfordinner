import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { PlanConsumer } from '../../providers/PlanProvider';
import { withRouter } from 'react-router-dom';

const PlanForm = ({addPlan, id, week_day, meal, theme, updatePlan, handleEditClose, history }) => {
  const [plan, setPlan] = useState({week_day: "", meal: "", theme: ""})

  useEffect( () => {
    if (id) {
      setPlan({week_day, meal, theme})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlan({...plan})
    if (id) {
      updatePlan(id, plan, history)
      handleEditClose()
    }
    else{
      addPlan(plan)
    }
    setPlan({week_day: "", meal: "", theme: ""})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicWeekDay">
        <Form.Label>Week Day</Form.Label>
        <Form.Control
          type="text"
          placeholder="Week Day"
          name="week_day"
          value={plan.week_day}
          onChange={(e) => setPlan({...plan, week_day: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicMeal">
        <Form.Label>Meal</Form.Label>
        <Form.Control
          type="text"
          placeholder="Meal (breakfast, lunch, dinner)"
          name="meal"
          value={plan.meal}
          onChange={(e) => setPlan({...plan, meal: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicTheme">
        <Form.Label>Theme</Form.Label>
        <Form.Control
          type="text"
          placeholder="Theme (Mexican, Italian, Chinese, etc.)"
          name="theme"
          value={plan.theme}
          onChange={(e) => setPlan({...plan, theme: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

const ConnectedPlanForm = (props) => (
  <PlanConsumer>
    { value => <PlanForm {...props} {...value} />}
  </PlanConsumer>
)

export default withRouter(ConnectedPlanForm);