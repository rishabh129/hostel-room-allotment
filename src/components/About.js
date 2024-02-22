import logo from "../logo-bit.png";
import "../App.css";
import "./styles.css";
import Navbar from './Navbar';

function About() {
  return (
    <div className="App">
      <div className="headInfo">
      
      <Navbar loggedIn={false} />
      </div>
      
      <div className="bodyContent">
        <div className="info">
          <h2 className="heading">Hostel Vision and Mission</h2>

          <h4 className="aboutHeading">Hostel Vision:</h4><br />
          <p className="aboutPara">
          Our goal is to cultivate an inclusive and supportive atmosphere within the hostel, harmonizing with the institution's overarching objectives. We aspire to develop a hostel facility of international acclaim, fostering the holistic development of our residents across social, academic, and personal domains. By providing a welcoming and nurturing environment, we aim to empower individuals to thrive and excel in their endeavors. Through our commitment to excellence and innovation, we endeavor to create a transformative living experience that prepares residents for success in a rapidly evolving global landscape.
          </p>
<br /><br />
          <h4 className="aboutHeading">Hostel Mission:</h4><br />
          <ol>
            <li>Conducive and secure living space.</li>
            <li>Cultivate a sense of community.</li>
            <li>Contribute to holistic student development.</li>
            <li>Prioritize safety and well-being.</li>
            <li>Environmental responsibility.</li>
          </ol>
        </div>

        
      </div>
    </div>
  );
}

export default About;
