import logo from './chiffonJSlogo.png';
import Description from './components/Description';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <Description />
    </div>
  );
}

export default App;
