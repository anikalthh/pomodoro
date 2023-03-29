import './App.css';
import Homepage from './components/Homepage.jsx';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navbar.jsx';

function App() {
  return (
    <div>
      <HashRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
