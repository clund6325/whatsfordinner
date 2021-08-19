import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import About from './components/shared/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute'
import Plans from './components/plans/Plans';
import PlanShow from './components/plans/PlanShow';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/home' component={Home} />
          <ProtectedRoute exact path='/about' component={About} />
          <ProtectedRoute exact path='/plans' component={Plans} />
          <ProtectedRoute exact path='/plans/:plan_id' component={PlanShow} />
          {/* <ProtectedRoute exact path='/recipes' component={Recipes} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={Nomatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
