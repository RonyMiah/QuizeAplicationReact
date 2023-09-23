import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
  const { setLoading, singUp, loading } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checked: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handelOnSumit = async (e) => {
    e.preventDefault();
    //password Checked
    if (formData.password !== formData.confirmPassword) {
      return setError("Your Password Doesn't Match");
    }

    try {
      setError(' ');
      setLoading(true);
      await singUp(formData.email, formData.password, formData.userName);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError('Failed to create an Account ');
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
          value={formData.userName}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="email"
          required
          placeholder="Enter email"
          icon="alternate_email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          required
          name="password"
          placeholder="Enter password"
          icon="lock"
          value={formData.password}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm password"
          icon="lock_clock"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Checkbox
          name="checked"
          required
          text="I agree to the Terms & Conditions"
          value={formData.checked}
          onChange={handleChange}
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
