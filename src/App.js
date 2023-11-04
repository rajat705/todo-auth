import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and other necessary components
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoList from './components/Todo/TodoList';

function App() {
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login navigate={navigate} />} />
        <Route path="register" element={<Register navigate={navigate} />} />
        <Route path="todo" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
