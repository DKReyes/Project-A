import '../Styles/Splash.css'
import '../Styles/General.css'
import '../Styles/About.css'

import { IconContext } from 'react-icons/lib';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Home = () => {
    return (
      <>
        <div class='splash-main'>
          <div class='splash-title'>
            <h2>Hi, my name is</h2>
            <h1>Dylan Reyes</h1>
            <h3>A fullstack web developer / software engineer</h3>
            <a href='/'>Contact</a> <a href='/'>Resume</a>
          </div>
        </div>  

        <div>
          <div>
            TEMPLATE IMAGE
          </div>
          <div>
            <h2>About Me</h2>

            <h4>Hello, I am Dylan Reyes.</h4>

            <p>I have background in full stack, cloud computiing, and software development.</p>
            
            <p>I am familiar with React, Javascript, Python, C#, PHP, and Node.</p>

            <p>
              I graduated from <a href='/'>Red River College</a> for computer science through their <a href='/'>Bussiness Information Technology</a> program. 
              With additional background in web design in high school at Kelvin High School.
            </p>

            <p>
              When I was younger I always enjoyed web and console games. And I wanted to share that passion to others. 
              I decided to learn coding to create software and websites that everyone could enjoy and feel that same passion I felt.
            </p>
            
            <p>
              Outside of coding I like to have many different hobbies. One of my personal favourite hobbies is kickboxing.
              I like to spend after hours after class or work at <a href='/'>Dave's Gym</a>.
            </p>

            <IconContext.Provider value={{ size: "1.5em"}}>
              <ul class='about-icons-ul'>
                <li><a href='/'><AiOutlineMail /></a></li>
                <li><a href='/'><AiFillLinkedin /></a></li>
                <li><a href='/'><AiFillGithub /></a></li>
              </ul>
            </IconContext.Provider>
          </div>
        </div>

        <div>
          <h2>Technology</h2>

        </div>

        <div>
          <h2>Projects</h2>
        </div>

        <div>
          <h2>Work Experience</h2>
        </div>
        
        <div>
          <h2>Contact</h2>
        </div>
      </>
    )
  };
  
  export default Home;
  