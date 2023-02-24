import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./Main";
import Docs from "./navbar/Docs";
import Pricing from "./navbar/Pricing";
import Jobs from "./navbar/Jobs";
import Journal from "./navbar/Journal";
import Press from "./navbar/Press";
import Power from "./Power";
import Timeline from "./Timeline";
import Tabs from "./Tabs";
import Data from "./Data";
import Policy from "./navbar/Policy";
import Service from "./navbar/Service";
import Website from "./navbar/Website";
import Processing from "./navbar/Processing";
import Disclosure from "./navbar/Disclosure";
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <div className="header-bg">
        <Header />
      </div>
      <Switch>
        <Route exact path='/'>
          <div className="main-bg">
            <Main />
          </div>
          <div className="main-body">
            <Power />
            <Timeline />
            <Tabs />
            <Data />
          </div>
        </Route>
        <Route path='/documents'>
          <Docs />
          <Footer />
        </Route>
        <Route path='/pricing'>
          <Pricing />
          <Footer />
        </Route>
        <Route path='/jobs'>
          <Jobs />
          <Footer />
        </Route>
        <Route path='/journal'>
          <Journal />
          <Footer />
        </Route>
        <Route path='/press'>
          <Press />
          <Footer />
        </Route>
        <Route path='/policy'>
          <Policy />
          <Footer />
        </Route>
        <Route path='/service'>
          <Service />
          <Footer />
        </Route>
        <Route path='/website'>
          <Website />
          <Footer />
        </Route>
        <Route path='/data-processing'>
          <Processing />
          <Footer />
        </Route>
        <Route path='/disclosure-policy'>
          <Disclosure />
          <Footer />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
