// import logo from './logo.svg';
import './App.css';
import {BsHeartFill} from 'react-icons/bs'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BsHeartFill style={{color: 'green'}}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
