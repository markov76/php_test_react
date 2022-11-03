import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost/php_test/index.php';

function App() {
  const [origin, setOrigin] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setMessage(response.data.message);
        setOrigin(response.data.origin);
     }).catch(error => {
       alert(error);
    });
  }, [] )

  return (
    <div>
      <h3>Message</h3>
      <p>{message}</p>
      <p>osoitteesi on {origin}</p>
    </div>
  );
}

export default App;
