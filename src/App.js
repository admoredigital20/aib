import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modal-video/css/modal-video.min.css';

import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import FullCourse from "./components/FullCourse";
import LearnMore from "./components/LearnMore";
import ZoomPage from "./components/ZoomPage";
import Cookies from "./components/Cookies";
import CdPayment from "./components/CdPayment";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bootcamp">
              <CourseDetails />
            </Route>
            <Route path="/fullcourse">
              <FullCourse />
            </Route>
            <Route path="/learnmore">
              <LearnMore />
            </Route>
            <Route path="/zoompage">
              <ZoomPage />
            </Route>
            <Route path="/cookies">
              <Cookies />
            </Route>
            <Route path="/payment">
              <CdPayment />
            </Route>
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
