import StartScreen from "./StartScreen";
import Slider from "./Slider";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizzStart from "./QuizzStart";
import Quizz from "./Quizz";
import QuizzDescription from "./QuizzDescription";
import Carousel from "./Carousel";
import Test from "./Test";
import Example from "./Example";

const { invoke } = window.__TAURI__.tauri



function App() {


  
  invoke('greet', { name: 'World' })


  .then((response) => console.log(response))  
  

  return (
    <Router>
      <div className="App">
        
       
        <div className="content">
          <Routes>
          <Route path="/" element={<StartScreen />}/>
          <Route path="/slider" element={<Slider />}/>
          <Route path="/quizzstart" element={<QuizzStart />}/>
          <Route path="/quizz1" element={<Quizz />}/>
          <Route path="/quizzdescription" element={<QuizzDescription  />}/>
          <Route path="/carousel" element={<Example />} />
          <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );

}



export default App;
