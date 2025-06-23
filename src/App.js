import React, { useState } from 'react';

function App() {
  const [signUp, setSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const endpoint = signUp ? '/signup' : '/signin';
    try {
      const res = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || data.message);
      setMessage(data.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>{signUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='Username'
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
          required
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <button type='submit' style={{ width: '100%' }}>
          {signUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <button onClick={() => setSignUp(!signUp)} style={{ marginTop: 10, width: '100%' }}>
        {signUp ? 'Already have an account? Sign In' : 'No account? Sign Up'}
      </button>
      {message && <div style={{ marginTop: 20, color: message.includes('success') ? 'green' : 'red' }}>{message}</div>}
    </div>
  );
}

export default App;