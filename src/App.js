import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await fetch('https://reqres.in/api/users?page=1');
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
  };

  return (
    <div className="App">
      <Navbar loadUsers={loadUsers} />

      <h1>Users</h1>
      <div className="user-grid">
        {users.map(({ id, first_name, last_name, avatar,email }) => (
          <div className="user-card" key={id}>
            <img src={avatar} alt={`${first_name} ${last_name}`} />
            <p>
              Name: {first_name} {last_name}<br/>
              Email:{email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
