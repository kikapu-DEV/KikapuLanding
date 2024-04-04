import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/index";
import { Features } from "./pages/Features";
import { CheckApp } from "./pages/CheckApp";
import Faqs from "./pages/Faqs/Faqs";
import { Target } from "./pages/Target/Target";
import { Home } from "./pages/Home/Home";
import { Team } from "./pages/Team/index";
import { DownloadNow } from "./pages/downloadNow/DownloadNow";
import Testimonials from "./pages/testimonials/Testimonials";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<Target />
			<Features />
			<CheckApp />
			<DownloadNow />
			<Testimonials />
			<Faqs />
			<Team />
			<Footer />
		</div>
	);
}

export default App;
