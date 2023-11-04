import React, { useState } from 'react';

function Register({ setUser, history }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Implement registration logic here and set the user
    setUser(username);
    history.push('/todo');
  }

  return (
    <div>
      <h2>Register</h2>
      {/* Registration form */}
    </div>
  );
}

export default Register;
