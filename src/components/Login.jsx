import React, { useState } from 'react';

function Login({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    print("hello world")
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Login submitted!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Login
        </button>

        <p style={{ marginTop: '10px', textAlign: 'center' }}>
          Don't have an account?{' '}\n          <span onClick={onSwitch} style={{ color: 'blue', cursor: 'pointer' }}>
            Signup
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
