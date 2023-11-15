import Typewriter from './components/typewriter';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  return (
    <body>
      <link rel='stylesheet' href="path/to/animate.css" />
        <div id='topbar'>
          <h1 id='topleft'>Evan Chou</h1>
          <ul id='sections'>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#contacts'>Contacts</a></li>
          </ul>
        </div>
        <button id='scrollToTop' onClick={scrollToTop}>^</button>
      <section id='welcome'>
        <div id='welcoming'>
          <p id='htmlpart'>&lt;html&gt; <br /><br /><br /><br /><br />&lt;/html&gt;</p>
          <p id='divpart'>&lt;div&gt;<br /><br /><br />&lt;/div&gt;</p>
          <p id='welcomepart'>Welcome to my page!</p>
        </div>
        {/*
    <Typewriter textToType="Evan J. Chou" speed={200} id='welcometitle'/>
    <Typewriter textToType="Software Engineer, Data Scientist" speed={100} id='jobtitle'/>*/}
        <h1 id='welcometitle'>Evan J. Chou</h1>
        <h2 id='jobtitle'>Software Engineer, Data Scientist</h2>
        <img id='welcomePic' src={require('./assets/Home.png')} alt='home' />
        <img id='programmerPic' src={require('./assets/Programmer.png')} alt='programmer' />
      </section>
      <section id='about'>
        <h1>About:</h1>
        <p id='descrip'>
          Welcome to my personal portfolio page!
          I'm Evan Chou, a dedicated college student with a passion for software engineering and data science.
          As an avid learner, I am actively cultivating a diverse skill set and accumulating valuable experience in these fields.
          My enthusiasm extends to the dynamic realms of machine learning and artificial intelligence,
          where I am eager to contribute and make a meaningful impact.
        </p>
        <p id='location'>Designated in Los Angeles, California</p>
      </section>
      <section id='skills'>
        <h1>Skills:</h1>
        <Carousel responsive={responsive} infinite={true} swipeable={true} 
        containerClass='carouselcontainer' itemClass='carousel'>
          <div id='item'>
            <img id='itempic' src={require('./assets/CSSIcon.png')} alt='CSS Icon' />
            <h2>CSS</h2>
          </div>
          <div id='item'>
            <img id='itempic' src={require('./assets/JavaIcon.png')} alt='Java Icon' />
            <h2>Java</h2>
          </div>
          <div id='item'>
            <img id='itempic' src={require('./assets/HTMLIcon.png')} alt='HTML Icon' />
            <h2>HTML</h2>
          </div>
          <div id='item'>
            <img id='itempic' src={require('./assets/ReactIcon.png')} alt='React Icon' />
            <h2>React</h2>
          </div>
          <div id='item'>
            <img id='itempic' src={require('./assets/JavaScriptIcon.png')} alt='JavaScript Icon' />
            <h2>JavaScript</h2>
          </div>
          <div id='item'>
            <img id='itempic' src={require('./assets/NodeIcon.png')} alt='Node.js Icon' />
            <h2>Node.js</h2>
          </div>
        </Carousel>
        <h1>Developer Tools:</h1>
        <div id='tools'>
          <div id='card'>
            <img src={require('./assets/EclipseIcon.png')} alt='Eclipse'/>
            <h2>Eclipse IDE</h2>
          </div>
          <div id='card'>
            <img src={require('./assets/VSCIcon.png')} alt='VSC'/>
            <h2>Visual Studio Code</h2>
          </div>
          <div id='card'>
            <img src={require('./assets/GitHubIcon.png')} alt='GH'/>
            <h2>GitHub</h2>
          </div>
        </div>
      </section>
      <section id='portfolio'>
        <h1>Portfolio:</h1>
        <h2>React.js Portfolio</h2>
        <p>Created a personal portfolio page using JavaScript, HTML, CSS, Node.js, and React</p>
        <h2>Artificial Intelligence and Machine Learning Research</h2>
        <p></p>
      </section>
      <section id='education'>
        <h1>Education:</h1>
        <h2>Pasadena City College (May 2023 - June 2025)</h2>
        <h3>Associate's in Science: Electrical Engineering</h3>
        <h3>Associate's in Arts: Engineering and Technologies</h3>
        <h2>University of California: Berkeley (September 2025 - June 2027)</h2>
        <h3>Bachelor's in Science: Electrical Engineering and Computer Sciences</h3>
        <h2>University of California: San Diego (September 2027 - June 2029)</h2>
        <h3>Master's in Science: Data Science</h3>
      </section>
      <section id='contacts'>
        <h1>Contact Me!</h1>
        <img id='programmer' src={require('./assets/Programmer2.jpg')} alt='programmer' />
        <ul>
          <li>Email: evan.chou@live.com</li>
          <li>Phone: +1 (626) - 512 - 1757</li>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
        <h2>Personal Life Blog (Coming soon)</h2>
      </section>
    </body>
  );
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: {max:4000, min:3000}, items: 5
  },
  desktop: {
    breakpoint: {max:3000, min:1024}, items: 3
  },
  tablet: {
    breakpoint: {max:1024, min:464}, items: 2
  },
  mobile: {
    breakpoint: {max:464, min: 0}, items: 1
  }
};

export default App;
