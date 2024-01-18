import '../Styles/Splash.css'
import '../Styles/General.css'

import About from './About.js'
import Technology from './Technology.js'
import WorkExperience from './WorkExperience.js'
import Projects from './Projects.js'
import Contact from './Contact.js'

import Bgimg from '../Images/background.jpg'

const Home = () => {
  



    return (
      <>
        <>{/* Testing Background */}</>
        <section class="section">
          <img src={Bgimg} alt="Background" class="bg-img"/>
          <div class="bg-overlay"></div>

          <div class='splash-main'>
          <div class='splash-title'>
            <h2>Hey, my name is</h2>
            <h1>Dylan Reyes</h1>
            <h3>A fullstack web developer / software engineer / cloud developer</h3>
            <a href='/'>Contact Me</a> <a>Resume</a>
          </div>
        </div>

        </section>

        <About />
        <Technology />
        <WorkExperience />
        <Projects />
        <Contact />

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </>
    )
  };

  export default Home;
