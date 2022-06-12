import React from 'react';

import Header from './components/header';
import { useThemeListener } from './services/theme/hooks';

const App: React.FC = () => {
  useThemeListener();

  return (
    <main>
      <Header />
    </main>
  );
};

export default App;
