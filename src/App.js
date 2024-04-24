import Navbar from './navbar'
import MegrendeloList from './pages/megrendeloList';
import MegrendeloDetail from './pages/megrendeloDetail';
import MegrendeloForm from './pages/megrendeloForm2';
import MunkalapList from './pages/munkalapList';
import MunkalapDetail from './pages/munkalapDetail';
import MunkalapForm from './pages/munkalapForm';
import AllSheet from './pages/osszesmunkalap'
import InactiveSheet from './pages/lezartmunkalap'
import ActiveSheet from './pages/aktivmunkalap'
import NewSheet from './pages/ujmunkalap'
import Welcome from './pages/welcome'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <div className="component">
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/ujmunkalap" component={NewSheet} />
            <Route path="/aktivmunkalap" component={ActiveSheet} />
            <Route path="/lezartmunkalap" component={InactiveSheet} />
            <Route path="/osszesmunkalap" component={AllSheet} />
            <Route path="/megrendelok" exact component={MegrendeloList} />
            <Route path="/megrendelo/new" component={MegrendeloForm} />
            <Route path="/megrendelo/:id" component={MegrendeloDetail} />
            <Route path="/munkalapok" exact component={MunkalapList} />
            <Route path="/munkalapok/new" component={MunkalapForm} />
            <Route path="/munkalapok/:id/edit" component={MunkalapForm} />
            <Route path="/munkalapok/:id" component={MunkalapDetail} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

