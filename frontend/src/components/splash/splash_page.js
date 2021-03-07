import React from 'react';
import LoginFormContainer from '../session/login_form_container'

class SplashPage extends React.Component {

  render() {
    return (
     <div className="splash">
        <h1>Internet Bingo</h1>
       
        <div className="splash-right-box">
          <LoginFormContainer/>
        </div>

     </div>
    );
  }
}

export default SplashPage;
