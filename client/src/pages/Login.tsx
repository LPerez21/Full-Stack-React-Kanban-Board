import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../utils/auth";
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const data = await login(loginData);
      Auth.login(data.token); // store JWT in localStorage
      navigate('/board'); // redirect to main board page
    } catch (err: unknown) {
      console.error('Failed to login', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed');
      }
    }
  };

  return (
    <div className="container login-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={loginData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
