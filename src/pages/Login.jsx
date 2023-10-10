import images from '../assets/images/login.svg';
import Illustration from '../components/Illustration';
import LoginFormWithReducer from '../components/LoginFormWithReducer';

function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration images={images} />
        {/* <LoginFrom /> */}

        <LoginFormWithReducer />
      </div>
    </div>
  );
}

export default Login;
