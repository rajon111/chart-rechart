// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart'

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <h1 className='text-6xl'>Welcome to website</h1>
      <Pricing></Pricing>
      <Rechart></Rechart>
    </div>
  );
}

export default App;
