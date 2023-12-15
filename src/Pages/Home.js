import '../Styles/Splash.css'
import '../Styles/General.css'
import Bgimg from '../Images/background.jpg'

const Home = () => {
    return (
      <>
        <>{/* Testing Background */}</>
        <section>
          <div>
            <img src={Bgimg} alt="Background" class="bg-img"/>
            <div class="bg-overlay"></div>
          </div>
        </section>


        <div class='splash-main'>
          <div class='splash-title'>
            <h2>Hey, my name is</h2>
            <h1>Dylan Reyes</h1>
            <h3>A fullstack web developer / software engineer / cloud developer</h3>
            <a href='/'>Contact</a>
          </div>
        </div>  

        <div>
          <h2>About Me</h2>

          <h4>Hello, I am Dylan Reyes.</h4>

          <p>I have background in full stack, cloud computiing, and software development.</p>
          
          <p>I am familiar with React, Javascript, Python, C#, PHP, and Node.</p>

          <p>I graduated from Red River College for computer science through their Bussiness Information Technology program. I had experience in coding through high school working with Java.</p>
          
          <p>Outside of coding I like to have many different hobbies. I love ice skating, kickboxing, and volleyball.
            I like to go kickboxing five times a week and volleyball every sunday.
          </p>
        </div>
      </>
    )
  };
  
  export default Home;
  