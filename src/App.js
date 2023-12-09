// import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import LandingPageBanner from "./components/LandingPageBanner";
import "./input.css";
import Navbar from "./Navbar";
export default function App() {
  return (
    <div>
      <Navbar />
      <LandingPageBanner />
      <Homepage/>
      {/* <Footer /> */}
    </div>
  );
}
