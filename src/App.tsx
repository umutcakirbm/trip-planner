import React, { useState } from 'react';

import Header from './components/header';
import SelectFilter from './components/select-filter';
import { useThemeListener } from './services/theme/hooks';

const App: React.FC = () => {
  useThemeListener();

  const [value, setValue] = useState('');

  return (
    <main>
      <Header />
      <SelectFilter
        id='country-filter'
        label='Country'
        placeholder='Choose the country'
        value={value}
        options={[{ label: 'test', value: '1' }]}
        onChange={setValue}
      />
    </main>
  );
};

export default App;
