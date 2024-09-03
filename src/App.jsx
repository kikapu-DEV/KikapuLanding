import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Features } from "./pages/Features";
import { CheckApp } from "./pages/CheckApp";
//import Faqs from "./pages/Faqs/Faqs";
import { Target } from "./pages/Target/Target";
import { Home } from "./pages/Home/Home";
//import { Team } from "./pages/Team/index";
import { WhyUs } from "./pages/whyUs/WhyUs";
//import Partners from "./pages/partners/Partners";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Home />
      <WhyUs />
      {/* <CheckApp /> */}
      {/* <Features /> */}
      {/* <Partners /> */}
      {/* <Faqs /> */}
      <Target />
      {/* <Team /> */}
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;