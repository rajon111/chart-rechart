// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing';
import Rechart from './components/Rechart/Rechart'
import Rechart2 from './components/Rechart2/Rechart2';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <h1 className='text-6xl'>Welcome to website</h1>
      <Pricing></Pricing>
      <Rechart></Rechart>
      <Rechart2></Rechart2>
    </div>
  );
}

export default App;
