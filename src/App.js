import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { LearningObjectivesProvider, initialData } from './LearningObjectivesContext';
import Search from './Search';
import LearningObjective from './components/LearningObjective';
import WellDone from './components/WellDone';
import StyledNavigation from './components/Navigation';
import EditLearningObjective from './components/EditLearningObjective';
import { LearningObjectivesContext } from './LearningObjectivesContext';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import ProtectedRoute from './auth/protected-route';

function App() {
  // TODO: need to work out useeffect for when calling from api


  return (
    <Router>
      <Auth0ProviderWithHistory>
        <LearningObjectivesProvider>
          <StyledNavigation />
          <Switch>
            <ProtectedRoute path="/learning-objective/edit" component={EditLearningObjective} />
            <Route path="/learning-objective" component={LearningObjective} />
            <Route path="/well-done" component={WellDone} />
            {/* <Route path="/teacher" component={Login} /> */}
            {/* <Route path="/teacher/edit" component={EditLearningObjective} /> */}
            {/* <Route exact path="/" render={(props) => <Search globalStore={globalStore} {...props} /> */}
            <Route exact path="/" component={Search} />
          </Switch>
        </LearningObjectivesProvider>
      </Auth0ProviderWithHistory>

    </Router>
  );
}

export default App;
