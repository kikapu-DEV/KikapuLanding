import './App.scss';
import { Footer } from './components/Footer/Footer';
import {Navbar} from './components/Navbar/index'
import { About } from './pages/About';
import { CheckApp } from './pages/CheckApp';
import { Features } from './pages/Features';
import { Home } from './pages/Home/Home';
import { Team } from './pages/Team/index';
import { DownloadNow } from './pages/downloadNow/DownloadNow';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Features/>
      <CheckApp/>
      <DownloadNow/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
