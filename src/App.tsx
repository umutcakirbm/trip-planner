import React from 'react';

import { useThemeListener } from './services/theme/hooks';

const App: React.FC = () => {
  useThemeListener();

  return (
    <main>
      <h1>Plan your trip!</h1>
    </main>
  );
};

export default App;
