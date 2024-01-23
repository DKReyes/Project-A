import '../Styles/WorkExperience.css'
import '../Styles/About.css'
import WorkExp from '../Components/technology/WorkExpTemplate.js'

const WorkExperience = () => {
    return (
        <>
            <div class='wrap'>
                <div class='work-main'>
                    <h2>WorkExperience</h2>
                </div>
                <div>
                    <WorkExp 
                        name='Test Title'
                        description='Test Description'
                        category='Cloud Computing'
                    />
                </div>

            </div>
        </>
    );
  };
  
  export default WorkExperience;
  