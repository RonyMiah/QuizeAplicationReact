import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupFormNormalWay() {
  const [username, setUesrName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState('');
  const [error, setError] = useState('');
  const { loading, setLoading, singUp } = useAuth();
  const navigate = useNavigate();

  const handelOnSumit = async (e) => {
    e.preventDefault();
    //checked password and confirm is match or not
    if (password !== confirmPassword) {
      setError("Password Didn't Match ");
    }
    try {
      setError('');
      setLoading(true);
      await singUp(email, password, username);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('There was Signup Error');
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
          // value={formData.userName}
          onChange={(e) => setUesrName(e.target.value)}
        />
        <TextInput
          type="text"
          name="email"
          required
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          required
          name="password"
          placeholder="Enter password"
          icon="lock"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm password"
          icon="lock_clock"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <Checkbox
          name="checked"
          required
          text="I agree to the Terms & Conditions"
          onChange={(e) => setChecked(e.target.value)}
          value={checked}
        />
        <Button type="button" disabled={loading}>
          <span> SignUP now</span>
        </Button>
        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login </Link> instead.
        </div>
      </Form>
    </>
  );
}
