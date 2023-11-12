import './App.css';

function App() {
  return (
    <>
      <div id='topbar'>
      <h1 id='topleft'>Evan Chou</h1>
      <ul id='sections'>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Education</li>
        <li>Contacts</li>
      </ul>
      </div><div id='welcome'>
        <h1 id='welcometitle'>Evan J. Chou</h1>
        <h2 id='jobtitle'>Software Engineer, Data Scientist, Student Researcher</h2>
      </div><div id='about'>
        <h1>About:</h1>
        <p id='descrip'>
          Hello, my name is Evan Chou, and I am an avid and inquisitive college student developing skills and experience in software engineering and data science.
          I am willing to learn many new things, and I am particularly interested in machine learning and the development of artificial intelligence.
        </p>
        <p>Designated in Los Angeles, California</p>
      </div>
      <div id='skills'>
        <h1>Skills:</h1>
        <ul id='skilllist'>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
        <h1>Developer Tools:</h1>
        <ul id='tools'>
          <li>Eclipse IDE</li>
          <li>Visual Studio Code</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div id='portfolio'>
        <h1>Portfolio:</h1>
        <h2>React.js Portfolio</h2>
        <p>Created a personal portfolio page using JavaScript, HTML, CSS, and React</p>
        <h2>Artificial Intelligence and Machine Learning Research</h2>
        <p></p>
      </div>
      <div id='education'>
        <h1>Education:</h1>
        <h2>Pasadena City College</h2>
        <h3>Associate's in Science: Electrical Engineering</h3>
        <h2>University of California:</h2>
        <h3>Bachelor's in Science: Electrical Engineering and Computer Sciences</h3>
        <h2>University of California: San Diego</h2>
        <h3>Master's in Science: Data Science</h3>
      </div>
      <div id='contacts'>
        <h1>Contact Me!</h1>
        <ul>
          <li>Email: evan.chou@live.com</li>
          <li>Phone: +1 (626) - 512 - 1757</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
        <h2>Personal Life Page</h2>
      </div>
      </>
  );
}

export default App;
