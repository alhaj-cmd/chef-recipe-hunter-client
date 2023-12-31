import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Porvider/AuthPorvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext)
  const [errorMessage, setError] = useState(false);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError('password must be 6 characters !!')
    }
    console.log(name, photo, email, password);
    createUser(email, password)

      .then(result => {
        const loggedUser = result.user;
        updateUserInfo(loggedUser, name, photo)
        console.log(loggedUser);
      })
      .catch(error => {
        console.error(error.message);
      })
  }

  const updateUserInfo = (currentUser, name, photo) => {
    updateProfile(currentUser, {
      displayName: name, photoURL: photo
    })
  }
  return (
    <Container className='w-25 mx-auto'>
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter email" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Enter email" required />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary"
          type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-danger">
          {errorMessage}
        </Form.Text>
        <br />
        <Form.Text className="text-secondary">
          Already have an Account ?
          <Link to='/login'>Login</Link>
        </Form.Text>

      </Form>
    </Container>
  );
};

export default Register;