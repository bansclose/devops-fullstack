import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Gọi API backend ở cổng 3001
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;
