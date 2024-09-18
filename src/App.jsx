import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { CheckApp } from "./pages/CheckApp";
import { Home } from "./pages/Home/Home";
import { WhyUs } from "./pages/whyUs/WhyUs";

function App() {
  return (
    <div className="App">
      <Home />
      <CheckApp />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;