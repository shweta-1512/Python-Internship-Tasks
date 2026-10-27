import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header
        title="My Learning Hub"
        subtitle="Learn Something New Every Day"
      />
      <Home />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
