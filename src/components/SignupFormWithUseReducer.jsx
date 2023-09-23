import { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

const initializeState = {
  error: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  checked: '',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        error: ' ',
      };
    case 'ERROR':
      return {
        ...state,
        error: 'There was a Singnup Error ',
      };
    case 'USERNAME':
      return {
        ...state,
        username: action.value,
      };
    case 'EMAIL':
      return {
        ...state,
        email: action.value,
      };
    case 'PASSWORD':
      return {
        ...state,
        password: action.value,
      };
    case 'CONFIRMPASSWORD':
      return {
        ...state,
        confirmPassword: action.value,
      };
    case 'CHECKED':
      return {
        ...state,
        checked: action.value,
      };

    default:
      return state;
  }
};

function SignupFormWithUseReducer() {
  const { singUp, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  //Using UseReducer Handle Forms

  const [updateState, dispatch] = useReducer(reducer, initializeState);

  const handelOnSumit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'SUCCESS' });
      setLoading(true);
      await singUp(
        updateState.email,
        updateState.password,
        updateState.username
      );
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch({ type: 'ERROR' });
    }
  };

  return (
    <>
      <Form style={{ height: '500px' }} onSubmit={handelOnSumit}>
        <TextInput
          type="text"
          name="userName"
          required
          placeholder="Enter name"
          icon="person"
          onChange={(e) =>
            dispatch({ type: 'USERNAME', value: e.target.value })
          }
          // value={formData.userName}
          // onChange={handleChange}
        />
        <TextInput
          type="text"
          name="email"
          required
          placeholder="Enter email"
          icon="alternate_email"
          onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })}
          // value={formData.email}
          // onChange={handleChange}
        />
        <TextInput
          type="password"
          required
          name="password"
          placeholder="Enter password"
          icon="lock"
          onChange={(e) =>
            dispatch({ type: 'PASSWORD', value: e.target.value })
          }
          //   value={formData.password}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm password"
          icon="lock_clock"
          onChange={(e) =>
            dispatch({ type: 'CONFIRMPASSWORD', value: e.target.value })
          }
          // value={formData.confirmPassword}
        />
        <Checkbox
          name="checked"
          required
          text="I agree to the Terms & Conditions"
          onChange={(e) => dispatch({ type: 'CHECKED', value: e.target.value })}
          // value={formData.checked}
        />
        <Button type="button" disabled={loading}>
          <span> SignUP now</span>
        </Button>
        {updateState.error && <p className="error">{updateState.error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login </Link> instead.
        </div>
      </Form>
    </>
  );
}

export default SignupFormWithUseReducer;
