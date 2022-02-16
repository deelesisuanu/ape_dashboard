import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './custom.css';
import LeftPane from './components/Panes/LeftPane';
import RightPane from './components/Panes/RightPane';
import Main from './layout/Main'
import TopPane from './components/Panes/TopPane';
import Timeline from './pages/Timeline'
import EditProfile from './pages/EditProfile'
import Notifications from './pages/Notifications'
import Search from './pages/Search'

function App() {
  return (

    <Router>
      <div className="app">
        <TopPane />
        <div className="container-fluid" >
          <div className="row mx-0 parent" >
            <LeftPane />
            <Switch>
              <Route path="/" component={ Main } exact />
              <Route path="/profile" component={ EditProfile } />
              <Route path="/feeds" component={ Timeline } />
              <Route path="/notifications" component={ Notifications } />
              <Route path="/search" component={ Search } />
            </Switch>
            <RightPane />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
