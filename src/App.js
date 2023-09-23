import './App.css';
import { Header } from './components/Header';
import { Genie } from './components/Genie';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Header />
        <br />
        <Genie />
        <div className='background'></div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
