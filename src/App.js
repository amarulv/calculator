import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column align-items-center bg-primary">
      <h1>0</h1>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column ms-2 gap-1">
          <button className="red-btn">+/-</button>
          <button className="red-btn">MRC</button>
          <button className="white-btn">7</button>
          <button className="white-btn">4</button>
          <button className="white-btn">1</button>
          <button className="red-btn">ON/C</button>
        </div>
        <div className="d-flex flex-column ms-2 gap-1">
          <button className="red-btn">&radic;</button>
          <button className="red-btn">M-</button>
          <button className="white-btn">8</button>
          <button className="white-btn">5</button>
          <button className="white-btn">2</button>
          <button className="white-btn">0</button>
        </div>
        <div className="d-flex flex-column ms-2 gap-1">
          <button className="red-btn">%</button>
          <button className="red-btn">M+</button>
          <button className="white-btn">9</button>
          <button className="white-btn">6</button>
          <button className="white-btn">3</button>
          <button className="white-btn">.</button>
        </div>
        <div className="d-flex flex-column ms-3 gap-1">
          <button className="red-btn">&#247;</button>
          <button className="red-btn">X</button>
          <button className="red-btn">-</button>
          <button className="red-btn">+</button>
          <button className="red-btn flex-grow-1">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
