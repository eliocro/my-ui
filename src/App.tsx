import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="demo-wrapper">
      <h1>MY-UI Components</h1>
      <Button label="This is a button" onClick={() => alert('Hello World!')} />
    </div>
  );
}

export default App;
