import Navbar from './navbar'
import AllSheet from './pages/osszesmunkalap'
import InactiveSheet from './pages/lezartmunkalap'
import ActiveSheet from './pages/aktivmunkalap'
import NewSheet from './pages/ujmunkalap'
import ViewSheet from './pages/viewsheet'
import Welcome from './pages/welcome'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

const App = () => {
  /*
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Welcome />
      break;
    case "/viewsheet":
      component = <ViewSheet />
      break;
    case "/ujmunkalap":
      component = <NewSheet />
      break;
    case "/aktivmunkalap":
      component = <ActiveSheet />
      break;
    case "/lezartmunkalap":
      component = <InactiveSheet />
      break;
    case "/osszesmunkalap":
      component = <AllSheet />
      break;
    default:
      break;
  }
  */

  return (
    <>
      <Router>
        <Navbar />
        <div className="component">
          <Switch>

            <Route exact path="/">
              <Welcome />
            </Route>

            <Route path="/viewsheet/:id">
              <ViewSheet />
            </Route>

            <Route path="/ujmunkalap">
              <NewSheet />
            </Route>

            <Route path="/aktivmunkalap">
              <ActiveSheet />
            </Route>

            <Route path="/lezartmunkalap">
              <InactiveSheet />
            </Route>

            <Route path="/osszesmunkalap">
              <AllSheet />
            </Route>

          </Switch>

        </div>
      </Router>
      
    </>
  )
}

export default App

