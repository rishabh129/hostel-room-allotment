import logo from './logo-bit.png';
import { LoginFunc } from './login.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='headInfo'>
        <img src={logo} alt="logo" />
      </div>
      
      <div className='bodyContent'>

        <div className='info'>

          

          <h2 className='heading'>Hostel Vision and Mission</h2>

          <h4>Hostel Vision:</h4>
          <p>To establish a welcoming and nurturing environment within the hostel that aligns seamlessly with the broader
        goals of
        the academic institution. Our vision is to create a globally recognized hostel facility that complements the
        social,
        academic, and personal growth of its residents.</p>

    <h4>Hostel Mission:</h4>
    <ol>
        <li>Conducive and secure living space.</li>
        <li>Cultivate a sense of community.</li>
        <li>Contribute to holistic student development.</li>
        <li>Prioritize safety and well-being.</li>
        <li>Environmental responsibility.</li>
    </ol>

        </div>

        <div className='form'>
          {LoginFunc()}
        </div>

      </div>


    </div>
  );
}

export default App;
