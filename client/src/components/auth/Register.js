import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Form } from 'react-bootstrap';

const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', passsword: '', name: '', image: '', passwordConfirmation: '' })
  const handleSubmit = (e) => {
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history)
      setUser({ email: '', passsword: '', name: '', image: '', passwordConfirmation: '' })
    }
    else {
      alert("Passwords Do Not Match")
    }
  }

  return(
    <>
    <h1>Register</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Labe>Name</Form.Labe>
        <Form.Control
          type="text"
          placeholder="enter name"
          name="name"
          value={user.name}
          onChange={(e) => setUser({...user, name: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicImage">
        <Form.Labe>Image</Form.Labe>
        <Form.Control
          type="text"
          placeholder="enter image url"
          name="image"
          value={user.image}
          onChange={(e) => setUser({...user, image: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Labe>Email</Form.Labe>
        <Form.Control
          type="email"
          placeholder="enter email"
          name="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Labe>Password</Form.Labe>
        <Form.Control
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({...user, password: e.target.value})}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPasswordConfirmation">
        <Form.Labe>Password Confirmation</Form.Labe>
        <Form.Control
          type="password"
          placeholder="password confirmation"
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          onChange={(e) => setUser({...user, passwordConfirmation: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedRegister;