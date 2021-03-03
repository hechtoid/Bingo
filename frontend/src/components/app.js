import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import SignupFormContainer from './session/signup_form_container';

import NewWordListContainer from './wordlists/new_word_list_container';
import WordListsContainer from './wordlists/word_lists_container';

import './app.css'


const App = () => (
  <div className="app">
    <link href="https://fonts.googleapis.com/css?family=Timmana&display=swap" rel="stylesheet"></link>
    <main className="main" >
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/wordlists/new" component={NewWordListContainer} />
        <ProtectedRoute exact path="/wordlists/" component={WordListsContainer} />
      </Switch>
    </main>
  </div>
);

export default App;