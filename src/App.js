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
        <div id='welcoming' className='typewriter'>
          <p id='htmlpart'>&lt;html&gt;</p>
          <p id='divpart'>&lt;div&gt;</p>
          <p id='welcomepart'>Welcome to my page!</p>
          <p id='divpart2'>&lt;/div&gt;</p>
          <p id='htmlpart2'>&lt;/html&gt;</p>
        </div>
        <div id='titles'>
          <h1 id='welcometitle'>Evan J. Chou</h1>
          <h2 id='jobtitle'>Software Engineer, Data Scientist, AI Researcher</h2>
        </div>
        <div id='welcomeImages'>
          <img id='welcomePic' src={require('./assets/images/Home.png')} alt='home' />
          <img id='programmerPic' src={require('./assets/images/Programmer.png')} alt='programmer' />
        </div>
      </section>
      <section id='about'>
        <div id='abttext'>
          <h1>About</h1>
          <p id='descrip'>
            Welcome to my personal portfolio page!
            I'm Evan Chou, a dedicated college student with a passion for software engineering and data science.
            As an avid learner, I am actively cultivating a diverse skill set and accumulating valuable experience in these fields.
            My enthusiasm extends to the dynamic realms of machine learning and artificial intelligence,
            where I am eager to contribute and make a meaningful impact.
          </p>
          <p id='location'>Designated in Los Angeles, California</p>
        </div>
        <img id='dsicon' src={require('./assets/images/DataScienceIcon.png')} alt='Data Science'/>
      </section>
      <section id='skills'>
        <div id='skillCarousel'>
          <h1>Skills</h1>
          <Carousel responsive={responsive} infinite={true} swipeable={true} 
          containerClass='carouselcontainer' itemClass='carousel'>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/CSSIcon.png')} alt='CSS Icon' />
              <h2>CSS</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/JavaIcon.png')} alt='Java Icon' />
              <h2>Java</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/HTMLIcon.png')} alt='HTML Icon' />
              <h2>HTML</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/ReactIcon.png')} alt='React Icon' />
              <h2>React</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/JavaScriptIcon.png')} alt='JavaScript Icon' />
              <h2>JavaScript</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/NodeIcon.png')} alt='Node.js Icon' />
              <h2>Node.js</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/C++Icon.png')} alt='C++ Icon'/>
              <h2>C++</h2>
            </div>
            <div id='item'>
              <img id='itempic' src={require('./assets/images/PythonLogo.png')} alt='Python Icon'/>
              <h2>Python</h2>
            </div>
          </Carousel>
        </div>
        <h1>Developer Tools</h1>
        <div id='tools'>
          <div id='card'>
            <img src={require('./assets/images/EclipseIcon.png')} alt='Eclipse'/>
            <h2>Eclipse IDE</h2>
          </div>
          <div id='card'>
            <img src={require('./assets/images/VSCIcon.png')} alt='VSC'/>
            <h2>Visual Studio Code</h2>
          </div>
          <div id='card'>
            <img src={require('./assets/images/GitHubIcon.png')} alt='GH'/>
            <h2>GitHub</h2>
          </div>
          <div id='card'>
            <img src={require('./assets/images/RobloxStudioLogo.png')} alt='RS'/>
            <h2>Roblox Studio</h2>
          </div>
        </div>
      </section>
      <section id='portfolio'>
        <h1>Portfolio</h1>
        <h2>React.js Portfolio</h2>
          <p>Created a personal portfolio page using JavaScript, HTML, CSS, Node.js, and React</p>
        <h2>Artificial Intelligence and Machine Learning Research</h2>
          <p>Currently learning and researching the development of artificial intelligence through machine learning using 
            Python libraries like Scikit-Learn, TensorFlow, Keras, etc. in order to develop an AI-programmed math tutoring application.</p>
        <h2>Java Algorithm Programs</h2>
          <p>-	Created a Student Gradebook program that allows students to enter and manage their grades for different subjects. 
            Applied object-oriented programming techniques by fully defining a class system that implemented various aspects of the program, such as student information, 
            class catalogue, user accounts, etc. Implemented data structures such as ArrayLists and HashMaps to store user data. 
            Designed a file input/output system for saving and loading gradebook data, ensuring data persistence.<br></br>
            -	Created an Online Library Management System that simulates the operations of a library, including managing books, users, borrowing, and returning books, 
            and keeping track of due dates. Implemented data structures such as ArrayLists, HashMaps, LinkedLists, and Stacks and Queues to 
            manage library functions and saved data. <br></br>
            -	Created a To-Do List Application which allows users to manage their tasks by adding, updating, marking as complete, and deleting tasks. 
            Deepened understanding of data structures and applied object-oriented programming. Incorporated file input/output for saving and loading task lists, 
            allowing users to maintain their tasks across sessions.</p>
      </section>
      <section id='education'>
        <h1>Education</h1>
        <div id='edcards'>
          <div id='card3'>
            <img src={require('./assets/images/PCCLogo.png')} alt='PCC Logo'/>
            <h2>Pasadena City College</h2>
              <h4 id='date'>May 2023 - June 2025</h4>
              <h3>AS: Electrical Engineering</h3>
              {/*<h3>AS: Civil Engineering</h3>
              <h3>AS: Mechanical, Aerospace, and Manufacturing Engineering</h3>*/}
              <h3>AA: Engineering and Technologies</h3>
              <p>Relevant coursework: Multivariable calculus, linear algebra, differential equations,
                engineering graphics, statics, circuits, materials, applied digital logic, C++ data structures,
                physics for engineers
              </p>
          </div>
          <div id='card3'>
            {/*<img src={require('./assets/images/UCBLogo.png')} alt='UCB Logo'/>*/}
            <h2>University of California: TBA</h2>
              <h4 id='date'>September 2025 - June 2027</h4>
              <h3>BS: Electrical Engineering and Computer Sciences, <br></br>Minor in Data Science</h3>
          </div>
          {/*
          <div id='card3'>
            <img src={require('./assets/images/UCSDLogo.jpg')} alt='UCSD Logo'/>
            <h2>UC San Diego</h2>
              <h4 id='date'>September 2027 - June 2029</h4>
              <h3>MS: Electrical and Computer Engineering with specialization in Machine Learning & Data Science</h3>
              <h3>MS: Electrical and Computer Enginering with specialization in Nanoscale Devices & Systems</h3>
              <h3>MS: Nanoengineering</h3>
          </div>*/}
        </div>
      </section>
      <section id='contacts'>
        <h1>Contact Me!</h1>
        <img id='programmer' src={require('./assets/images/Programmer2.jpg')} alt='programmer' />
        <div id='contactcards'>
          <div id='card2'>  
            <img id='item2' src={require('./assets/images/MailIcon.png')} alt='email'/>
            <h2>Email: evan.chou@live.com</h2>
          </div>
          <div id='card2'>
            <img id='item2' src={require('./assets/images/CallIcon.png')} alt='call'/>
            <h2>Phone: +1 (626) - 512 - 1757</h2>
          </div>
          <div id='card2'>
            <img id='item2' src={require('./assets/images/LinkedInIcon.png')} alt='linkedin'/>
            <h2><a href='https://www.linkedin.com/in/evanjchou/' target='_blank'>LinkedIn: Evan Chou</a></h2>
          </div>
          <div id='card2'>
            <img id='item2' src={require('./assets/images/GitHubIcon.png')} alt='github'/>
            <h2><a href='https://github.com/EvanJayChou' target='_blank'>GitHub: EvanJayChou</a></h2>
          </div>
        </div>
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
