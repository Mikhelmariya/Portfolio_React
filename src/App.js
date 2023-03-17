//Root component, initially run
import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title ="Hey!!  I'm Mikhel V Kuttickal"
  const myquote ="I can do all things through Christ who strengthens me"

  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <h1>{title}</h1>
        <p>{myquote}</p>
        <a href="https://github.com/Mikhelmariya">Github</a>
      </div>
    </div>
  );
}

export default App;
