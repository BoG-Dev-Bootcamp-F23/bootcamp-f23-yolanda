import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LinesPage from './pages/LinesPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="lines">
              <Route path=":lineColor" element={<LinesPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
