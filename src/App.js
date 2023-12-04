import StartScreen from "./pages/StartScreen";
import ChooseMenu from "./pages/ChooseMenu";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizzStart from "./pages/quiz_pages/QuizzStart";

import QuizzDescription from "./pages/quiz_pages/QuizzDescription";
import Quiz from "./pages/Quiz";
import Example from "./pages/KnowledgeSlider";

const { invoke } = window.__TAURI__.tauri



function App() {


  

  return (
    <Router>
      <div className="App">
        
       
        <div className="content">
          <Routes>
          <Route path="/" element={<StartScreen />}/>
          <Route path="/slider" element={<ChooseMenu />}/>
          <Route path="/carousel" element={<Example />} />
          <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}



export default App;
