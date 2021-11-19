import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Info from "./Components/Pages/Info";
import Photo from "./Components/Pages/Photo";
import Work from "./Components/Pages/Work";
import Navbar from "./Components/NavBar/Navbar";

import Error from "./Components/Pages/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Info" component={Info} />
        <Route path="/Photo" component={Photo} />
        <Route path="/Work" component={Work} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
