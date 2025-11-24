import { useState } from 'react';

import { Button, RadioGroup, Switch } from './lib';
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState('light');

  return (
    <div className="demo-wrapper">
      <h1>My-UI Components</h1>
      <div>
        <Button
          label="This is a button"
          onClick={() => alert('Hello World!')}
        />
      </div>
      <Switch
        name="active"
        label="Device active"
        checked={active}
        onChange={setActive}
      />
      <RadioGroup
        name="mode"
        label="Mode"
        options={RADIO_OPTIONS}
        value={mode}
        onChange={setMode}
      />
    </div>
  );
}

export default App;

const RADIO_OPTIONS = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];
