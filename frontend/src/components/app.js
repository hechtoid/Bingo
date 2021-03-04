import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SignupFormContainer from './session/signup_form_container';

import ComposePhraseListContainer from './wordlists/compose_phrase_list_container';
import WordListsContainer from './wordlists/word_lists_container';

import './app.css'


const App = () => (
  <div className="app">
    <main className="main" >
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/wordlists/" component={WordListsContainer} />
        <ProtectedRoute exact path="/wordlists/new" component={ComposePhraseListContainer} />
        <ProtectedRoute exact path="/wordlists/:id" component={ComposePhraseListContainer} />
      </Switch>
    </main>
  </div>
);

export default App;