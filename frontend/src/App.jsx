import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/user')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => {
        console.log(err);
        setMessage('Error fetching user data');
      });
  }, []); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const userExists = data.some(user => 
      user.name === username && user.pass === password
    );

    if (userExists) {
      setMessage('Login successful');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {message && <p>{message}</p>} {}
      </div>
    </>
  );
}

export default App;
