import './App.css';
import LinesPage from "./pages/LinesPage";

function App() {
  console.log("rerender app");
  return (
    <div className="App">
      <LinesPage />
    </div>
  );
}

export default App;
