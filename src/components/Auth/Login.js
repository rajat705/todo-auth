import React, { useState } from 'react';

function Login({ setUser, history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here and set the user
    setUser(username);
    history.push('/todo');
  }

  return (
    <div>
      <h2>Login</h2>
      {/* Login form */}
    </div>
  );
}

export default Login;
