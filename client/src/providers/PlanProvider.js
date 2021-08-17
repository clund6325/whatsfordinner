import React, { useState } from 'react';
import axios from 'axios';

export const PlanContext = React.createContext();
export const PlanConsumer = PlanContext.Consumer;

const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([])

  const getAllPlans = () => {
    axios.get('/api/plans')
      .then( res => {
        setPlans(res.data)
      })
      .catch( err => console.log(err))
  }

  const addPlan = ( plan, history ) => {
    axios.post('/api/plans', { plan })
      .then( res => {
        setPlans([...plans, res.data])
      })
      .catch( err => console.log(err))
      history.push("/plans")
  }

  const updatePlan = ( id, plan, history ) => {
    axios.put(`/api/plans/${id}`, { plan })
      .then( res => {
        const updatedPlans = plans.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p
        })
        setPlans(updatedPlans)
        history.push("/plans")
      })
      .catch( err => console.log(err))
      history.push("/plans")
  }

  const deletePlan = ( id, history ) => {
    axios.delete(`/api/plans/${id}`)
      .then( res => {
        setPlans(plans.filter(p => p.id !== id))
        alert(res.data.message)
        history.push("/plans")
      })
      .catch( err => console.log(err))
  }

  return(
    <PlanContext.Provider value={{
      plans,
      getAllPlans: getAllPlans,
      addPlan: addPlan,
      updatePlan: updatePlan,
      deletePlan: deletePlan
    }}>
      { children }
    </PlanContext.Provider>
  )
}

export default PlanProvider;