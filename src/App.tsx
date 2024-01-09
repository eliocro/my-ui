import { useState } from 'react';

import Button from './components/Button';
import Switch from './components/Switch';
import './App.css';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="demo-wrapper">
      <h1>MY-UI Components</h1>
      <Button label="This is a button" onClick={() => alert('Hello World!')} />
      <Switch
        name="active"
        label="Device active"
        checked={active}
        onChange={setActive}
      />
    </div>
  );
}

export default App;
