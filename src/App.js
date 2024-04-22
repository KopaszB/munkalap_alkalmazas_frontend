import Navbar from './navbar'
import MegrendeloList from './pages/megrendeloList';
import MegrendeloDetail from './pages/megrendeloDetail';
import MegrendeloForm from './pages/megrendeloForm2';
import HibatipusList from './pages/hibatipusList';
import HibatipusForm from './pages/hibatipusForm';
import MunkalapList from './pages/munkalapList';
import MunkalapDetail from './pages/munkalapDetail';
import MunkalapForm from './pages/munkalapForm';
import AllSheet from './pages/osszesmunkalap'
import InactiveSheet from './pages/lezartmunkalap'
import ActiveSheet from './pages/aktivmunkalap'
import NewSheet from './pages/ujmunkalap'
import ViewSheet from './pages/viewsheet'
import Welcome from './pages/welcome'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <div className="component">
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/viewsheet/:id" component={ViewSheet} />
            <Route path="/ujmunkalap" component={NewSheet} />
            <Route path="/aktivmunkalap" component={ActiveSheet} />
            <Route path="/lezartmunkalap" component={InactiveSheet} />
            <Route path="/osszesmunkalap" component={AllSheet} />
            <Route path="/megrendelok" exact component={MegrendeloList} />
            <Route path="/megrendelo/new" component={MegrendeloForm} />
            <Route path="/megrendelo/:id/edit" component={MegrendeloForm} />
            <Route path="/megrendelo/:id" component={MegrendeloDetail} />
            <Route path="/hibatipusok" exact component={HibatipusList} />
            <Route path="/hibatipusok/new" component={HibatipusForm} />
            <Route path="/hibatipusok/:id/edit" component={HibatipusForm} />
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

