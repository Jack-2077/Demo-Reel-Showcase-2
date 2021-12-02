import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/es/components/AnimatePresence/index';

import Home from './Components/Home';
import Info from './Components/Pages/Info';
import Photo from './Components/Pages/Photo';
import Work from './Components/Pages/Work';
import Navbar from './Components/NavBar/Navbar';

import Error from './Components/Pages/Error';

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={Home} exact />
          <Route path='/Info' component={Info} />
          <Route path='/Photo' component={Photo} />
          <Route path='/Work' component={Work} />
          <Route component={Error} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
