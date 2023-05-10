import logo2 from './logo2.png';
import './App.css';
import Calendar from './Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo2" alt="logo2" />
        <br></br> <br></br> <br></br> <br></br>
        <Calendar />
        <p>
          <h1>O "Dia das Mães" está chegando, adiante seu pedido conosco!</h1>
          ... <code>...</code> ...
        </p>
        <a className="App-link">...</a>
      </header>
    </div>
  );
}

export default App;
