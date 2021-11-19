import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Info from "./Components/Pages/Info";
import Photo from "./Components/Pages/Photo";
import Work from "./Components/Pages/Work";
import Navbar from "./Components/NavBar/Navbar";

import Error from "./Components/Pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Info" component={Info} />
        <Route path="/Photo" component={Photo} />
        <Route path="/Work" component={Work} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
