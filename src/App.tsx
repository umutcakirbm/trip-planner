import React, { useState } from 'react';

import Datepicker from './components/form/datepicker';
import FormSelect from './components/form/select';
import Header from './components/header';
import { useThemeListener } from './services/theme/hooks';

const App: React.FC = () => {
  useThemeListener();

  const [value, setValue] = useState('');
  const [date, setDate] = useState('2021-07-31');

  return (
    <main>
      <Header />
      <FormSelect
        id='country-filter'
        label='Country'
        placeholder='Choose the country'
        value={value}
        options={[{ label: 'test', value: '1' }]}
        onChange={setValue}
      />
      <Datepicker
        id='datepicker'
        label='Date'
        availableDates={['2021-07-30', '2021-07-31']}
        selectedDate={date}
        onSelect={setDate}
      />
    </main>
  );
};

export default App;
