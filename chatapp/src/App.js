
import './App.css';
import Login from  '../src/views/login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
