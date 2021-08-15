import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <Jumbotron>
    <h1>404 - Page Not Found</h1>
    <Link to="/">
      <Button>
        Return Home
      </Button>
    </Link>
  </Jumbotron>
)

export default Nomatch;