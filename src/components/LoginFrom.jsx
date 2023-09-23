import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

function LoginFrom() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const { logIn, setLoading, loading } = useAuth();

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('There Was a problem Login ..');
    }
  }

  return (
    <>
      <Form style={{ height: '330px' }} onSubmit={handleLogin}>
        <TextInput
          required
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          required
          ype="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button disabled={loading}>
          {' '}
          <span> Login now </span>{' '}
        </Button>
        {error && <p className="error">{error} </p>}
        <div className="info">
          Dont have an account? <Link to="/signup">SignUp </Link> instead.
        </div>
      </Form>
    </>
  );
}

export default LoginFrom;
