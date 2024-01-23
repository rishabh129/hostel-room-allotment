import logo from './logo-bit.png';
import { loginFunc } from './login.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headInfo'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='bodyContent'>

        <div className='info'>

          <h2>Info</h2>

        </div>

        <div className='form'>
          {loginFunc()}
        </div>

      </div>


    </div>
  );
}

export default App;
