import React, { useState } from 'react';

const App: React.FC = () => {
  // TODO: Move this to redux state and add theme switch
  const [theme] = useState('theme--default');

  return (
    <main className={`theme ${theme}`}>
      <h1>Plan your trip!</h1>
    </main>
  );
};

export default App;
