import StartScreen from "./StartScreen";
import Slider from "./Slider";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const { invoke } = window.__TAURI__.tauri


function App() {
   // now we can call our Command!
  // Right-click the application background and open the developer tools.
  // You will see "Hello, World!" printed in the console!
  invoke('greet', { name: 'World' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))
  return (
    <Router>
      <div className="App">
       
        <div className="content">
          <Routes>
          <Route path="/" element={<StartScreen />}/>
          <Route path="/slider" element={<Slider />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );

}



export default App;
