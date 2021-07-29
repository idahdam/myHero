import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
