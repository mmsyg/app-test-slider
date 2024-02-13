import StartScreen from "./pages/StartScreen";
import ChooseMenu from "./pages/ChooseMenu";
import {BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom';
import QuizzStart from "./pages/quiz_pages/QuizzStart";

import QuizzDescription from "./pages/quiz_pages/QuizzDescription";
import Quiz from "./pages/Quiz";
import Example from "./pages/KnowledgeSlider";
import {AppDataContextProvider} from "./context/app-data/AppDataContextProvider";
import SetRight from "./components/SetRight";

function App() {


  return (
    <HashRouter>
      <AppDataContextProvider>
      <div className="App">
      <SetRight />
          <div className="content">
            <Routes>
            <Route path="/" element={<StartScreen />}/>
            <Route path="/slider" element={<ChooseMenu />}/>
            <Route path="/carousel" element={<Example />} />
            <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
      </div>
      </AppDataContextProvider>
    </HashRouter>
  );

}



export default App;
