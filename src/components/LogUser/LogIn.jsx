import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Porvider/AuthPorvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/Firebase-config';
import { FaGithub, FaGoogle, FaSign, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const LogIn = () => {
  // google signIn
  const auth = getAuth(app);
  const Googleprovider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, Googleprovider)
      .then(res => {
        const user = res.user;
        console.log(user);
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, GithubProvider)
      .then(result => {
        const githubUser = result.user;
        console.log(githubUser);
        setUser(githubUser);
      })
      .catch(error => {
        console.log('error', error.message)
      })
  }
  // email sign
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log('location', location);
  const from = location.state?.form?.pathname || "/"

  const handleSingIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        // event.target.reset();
      })
      .catch(error => {
        console.error(error.message);
      })
  }
  return (
    <Container className='w-25 border mt-4'>
      <h2>Please Login!!!</h2>
      <Form onSubmit={handleSingIn}   >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Email <FaSignInAlt></FaSignInAlt>
        </Button>

        <Button className='m-2' onClick={handleGoogleSignIn}>Login <FaGoogle></FaGoogle></Button>
        <Button onClick={handleGithubSignIn}>SingIn <FaGithub></FaGithub></Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an Account ?
          <Link to='/register'>Register</Link>
        </Form.Text>

      </Form>
    </Container>
  );
};

export default LogIn;