import { useLocation } from "react-router-dom";
import BlindLearningEnglish from "./BlindEnglish";
import BlindLearningMaths from "./BlindMaths";
import BlindLearningScience from "./BlindScience";

const BlindLearning = () => {
 
  const location = useLocation();

  const learn = location.state

  return (
<>
{

  learn === "english" ? <BlindLearningEnglish/> : 

  learn === "maths" ? <BlindLearningMaths/> : <BlindLearningScience/>
}

</>
  );
};

export default BlindLearning;