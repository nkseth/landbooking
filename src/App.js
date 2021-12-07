import "./App.css";
import Routes from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Components";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
