import "./App.css";
import Routes from "./Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Footer } from "./Components";
import { injectStore } from "./axios";
import { store } from "./redux/store";
import Snackbar from "./Components/snackbar";
import Loading from "./Components/loading";
import { message } from "./fireabse";
import { notification } from "./redux/slices/reservations";
import { opensnackbar } from "./redux/slices/user";
function App() {
  injectStore(store);
  message.onMessage((payload) => {
    console.log("Message received. ", payload);
    store.dispatch(opensnackbar("info", "this is notification"));
    store.dispatch(notification(payload));
  });
  return (
    <div style={{ maxWidth: "100vw", width: "100%", overflowX: "hidden" }}>
      <Snackbar />
      <Loading />
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
