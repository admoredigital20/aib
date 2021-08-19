import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import FullCourse from "./components/FullCourse";
import LearnMore from "./components/LearnMore";

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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
