import "./App.css";
import Routes from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Components";
import {injectStore} from "./axios";
import {store} from './redux/store'
function App() {
  injectStore(store);
  return (
    
    <div style={{maxWidth:"100vw",width:'100%',overflowX:"hidden"}}>
     
      <Router>
        <Header />
        <Routes />
       
      </Router>
     
    </div>
 
  );
}

export default App;
