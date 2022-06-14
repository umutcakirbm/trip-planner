import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import TripPlannerPage from './pages/TripPlanner';
import { useThemeListener } from './services/theme/hooks';

const App: React.FC = () => {
  useThemeListener();

  return (
    <>
      <Header />
      <main>
        <TripPlannerPage />
      </main>
      <Footer />
    </>
  );
};

export default App;
