import { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const initialState = {
  email: '',
  password: '',
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCESS':
      return {
        ...state,
        error: '',
      };
    case 'ERROR':
      return {
        ...state,
        error: 'There Was a problem Login ..',
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

    default:
      return state;
  }
};

function LoginFormWithReducer() {
  const { logIn, setLoading, loading } = useAuth();
  const navigate = useNavigate();
  //Use UseReducer On Handle Form Data in Here
  const [updateState, dispatch] = useReducer(reducer, initialState);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      dispatch({ type: 'SUCESS' });
      setLoading(true);
      await logIn(updateState.email, updateState.password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch({ type: 'ERROR' });
    }
  }

  return (
    <>
      <Form style={{ height: '330px' }} onSubmit={handleLogin}>
        <TextInput
          required
          type="text"
          placeholder="Enter email"
          value={updateState.email}
          onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })}
        />
        <TextInput
          required
          type="password"
          placeholder="Enter password"
          value={updateState.password}
          onChange={(e) =>
            dispatch({ type: 'PASSWORD', value: e.target.value })
          }
        />

        <Button disabled={loading}>
          <span> Login now </span>{' '}
        </Button>
        {updateState.error && <p className="error">{updateState.error} </p>}
        <div className="info">
          Dont have an account? <Link to="/signup">SignUp </Link> instead.
        </div>
      </Form>
    </>
  );
}

export default LoginFormWithReducer;
