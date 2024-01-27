import '../Styles/WorkExperience.css'
import '../Styles/About.css'
import WorkExp from '../Components/technology/WorkExpTemplate.js'

const WorkExperience = () => {
    return (
        <>
            <div class='wrap'>
                <div class='work-main'>
                    <h2>Work Experience</h2>
                </div>
                <div>
                    {/* <WorkExp 
                        job='Test'
                        jobtitle='Test Title'
                        time='Jan 1999 - Dec 9999'
                        description='Test Description'
                        categories='Cloud Computing, Front End, Back End'
                    /> */}

                    <WorkExp
                        job='Enns Brother'
                        jobtitle='Cloud Engineer Intern'
                        time='Jan 2022 - Apr 2022'
                        description='Overhauled and reconstructed the full exterior of their weather website. 
                                     Improved the mobile and desktop viewing experience by including responsive sizing 
                                     to all objects the webpage. Designed an automated email inquiry system using an email API synced to
                                     AWS. Actively provided detailed responses and quality discussions to daily scrum and programming review meetings.'
                        categories='Cloud Computing, Front End, Back End, Database, React, SQL, AWS, Node'
                    />

                    <WorkExp
                        job='Good Local'
                        jobtitle='Cloud Engineer Intern'
                        title='May 2022 - Aug 2022'
                        description='Tickets involving a mixture of creating drop down tables, forms, and user performance graphs 
                                     that synchronized to a database that I would create or use. Constructed form components with MUI CSS frameworks.
                                     Daily team meetings using the AGILE everyday to ensure proper productivity flow.'
                        categories='Cloud Computing, Front End, Back End, Database, MySQL, React, Google Cloud, Node, MUI, Jira'
                    />
                </div>

            </div>
        </>
    );
  };
  
  export default WorkExperience;
  