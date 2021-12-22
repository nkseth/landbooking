import "./App.css";
import Routes from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Components";
import {injectStore} from "./axios";
import {store} from './redux/store'
import Snackbar from './Components/snackbar'
import Loading from './Components/loading'
function App() {
  injectStore(store);
  return (
    
    <div style={{maxWidth:"100vw",width:'100%',overflowX:"hidden"}}>
     <Snackbar/>
     <Loading />
      <Router>
        <Header />
        <Routes />
       
      </Router>
     
    </div>
 
  );
}

export default App;
