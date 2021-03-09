import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, withRouter } from 'react-router-dom';
import SplashPage from './app/splash_page';
import ButtonBar from './app/button_bar';
import SignupFormContainer from './session/signup_form_container';

import ComposePhraseListContainer from './wordlists/compose_phrase_list_container';
import WordListsContainer from './wordlists/word_lists_container';
import Game from './game/game';

import './app.css'


const App = props => (
  <div className="app">
    <ButtonBar />
    <main className="main" >
      <Switch>
        <AuthRoute exact path="/" component={SplashPage} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/wordlists/" component={WordListsContainer} />
        <ProtectedRoute exact path="/wordlists/new" component={ComposePhraseListContainer} />
        <ProtectedRoute exact path="/wordlists/:id/:name" component={ComposePhraseListContainer} />
        <Route path="/game/:id/:name" component={Game} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);