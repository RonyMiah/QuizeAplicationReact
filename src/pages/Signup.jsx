import { Link } from 'react-router-dom';
import images from '../assets/images/signup.svg';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import styles from '../components/style/Signup.module.css';
function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration images={images} />
        <Form className={styles.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms & Conditions" />
          <Button>
            <span> SignUP now</span>
          </Button>

          <div className="info">
            Already have an account? <Link to="/login">Login </Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}

export default Signup;
