import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './custom.css';
import MobilePane from './components/Panes/MobilePane';
import LeftPane from './components/Panes/LeftPane';
import RightPane from './components/Panes/RightPane';
import Main from './layout/Main'
import TopPane from './components/Panes/TopPane';
import Timeline from './pages/Timeline'
import EditProfile from './pages/EditProfile'
import Notifications from './pages/Notifications'
import Search from './pages/Search'
import PostDetails from './pages/PostDetails'
import UserProfile from './pages/UserProfile';

import { ToggleContext } from './contexts/ToggleContext';
import { useState } from 'react';

function App() {

  const [toggle, setToggle] = useState(false)

  return (

    <Router>
      <div className="app">
        <ToggleContext.Provider value={{ toggle, setToggle }}>
          <TopPane />
          <div className="container custom-container">
            <div className="row mx-0 parent" >
              <MobilePane />
              <LeftPane />
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/profile" component={EditProfile} />
                <Route path="/feeds" component={Timeline} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/search" component={Search} />
                <Route path="/feed-details" component={PostDetails} />
                <Route path="/:username" component={UserProfile} />
              </Switch>
              <RightPane />
            </div>
          </div>
        </ToggleContext.Provider>
      </div>
    </Router>
  );
}

export default App;
