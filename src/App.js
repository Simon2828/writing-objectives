import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Search from './Search';
import { LearningObjectivesProvider } from './LearningObjectivesContext';
import LearningObjective from './components/LearningObjective';
import WellDone from './components/WellDone';
import StyledNavigation from './components/Navigation';
import EditLearningObjective from './components/EditLearningObjective';

function App() {
  // TODO: need to work out useeffect for when calling from api

  // useEffect(() => {
  //   console.log('here in useeffect')
  //   // update when using an api
  //   setState(data);
  // }, [])

  // const [state, setState] = useContext(LearningObjectivesContext);

  return (
    <Router>
      <LearningObjectivesProvider>
        <StyledNavigation />
        <Switch>
          <Route path="/learning-objective" component={LearningObjective} />
          <Route path="/well-done" component={WellDone} />
          {/* <Route path="/teacher" component={Login} /> */}
          {/* <Route path="/teacher/edit" component={EditLearningObjective} /> */}
          <Route exact path="/" component={Search} />
        </Switch>
      </LearningObjectivesProvider>

    </Router>
  );
}

export default App;
