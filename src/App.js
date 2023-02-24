import "./App.css";
import Bargraph from "./bargraph/Bargraph";
import Earnings from "./users/Users";
import HomeData from "./home/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Earnings />

      <HomeData />

      <Bargraph />

      <Footer />
    </div>
  );
}

export default App;
