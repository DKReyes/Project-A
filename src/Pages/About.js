import '../Styles/About.css'

import { IconContext } from 'react-icons/lib';
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const About = () => {
    return (
        <div class='wrap'>
            <div class='about-content'>
                <div class='about-text'>
                    <h4>Hey I'm Dylan!</h4>

                    <p>
                        I'm a software engineer that has experience in full stack development, cloud computting, and app development.
                        I graduated from <a href='/'>Red River College</a> for soft engineering through their <a href='/'>Bussiness Information Technology</a> program.
                        My passion in the world of technology began with a fascination for turning ideas into reality.
                        {/* The college is where I honed my skills with Javascript, React, AWS, Python, Ruby on Rails, Java, C++, PHP, and Node. */}
                    </p>

                    <p>
                        My approach to work is believing the power of colloborations and open communication. Whether it's working
                        independently or as a part of a dynamic team, I thrive on finding clean and compact solutions to complex problems.
                        My goal is to not just write code, but craft reliable and scalable software that adds value to everyone.
                    </p>

                    <p>
                        Outside of coding I like to have many different hobbies. One of my personal favourite hobbies is kickboxing.
                        I like to spend after hours after class or work at <a href='/'>Dave's Gym</a>. I am always eager to connect with
                        fellow tech enthusiasts, so feel free to reach out for discussions, colloborations, or sharing your favourite coding anecdotes.

                        Thank you for visiting my corner of the web. Let's build something amazing!
                    </p>

                    <IconContext.Provider value={{ size: '1.5em'}}>
                    <ul class='about-icons-ul'>
                        <li><a href='/'><AiOutlineMail /></a></li>
                        <li><a href='/'><AiFillLinkedin /></a></li>
                        <li><a href='/'><AiFillGithub /></a></li>
                    </ul>
                    </IconContext.Provider>
                </div>
                {/* <div class='about-image'>
                    TEMPLATE IMAGE
                </div> */}
            </div>
        </div>
    );
  };
  
  export default About;
  