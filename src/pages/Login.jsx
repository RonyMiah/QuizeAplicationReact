import { Link } from 'react-router-dom';
import images from '../assets/images/login.svg';
import Button from '../components/Button';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';

function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration images={images} />
        <Form>
          <TextInput type="text" placeholder="Enter email" />
          <TextInput ype="password" placeholder="Enter password" />

          <Button>
            {' '}
            <span> Login now </span>{' '}
          </Button>

          <div className="info">
            Dont have an account? <Link to="/signup">SignUp </Link> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
