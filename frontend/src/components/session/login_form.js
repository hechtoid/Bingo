import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handle: '',
      password: '',
      errors: {}
    };

    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  async demoLogin(e) {
    e.preventDefault();

    const demoUser = {
      handle: 'GuestUser',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById("handle").focus();
    for (let i = 1; i <= demoUser.handle.length; i++) {
      this.setState({ handle: demoUser.handle.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('submit-login').click();
    document.getElementById('password-input').blur();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      handle: this.state.handle,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-box">
      <h1>Internet Bingo</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
              <input type="text"
                className="input-field"
                id="handle"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Username"
              />
            <br></br>
              <input type="password"
                id="password-input"
                className="input-field"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <div>
            <input className="submit-btn" id="submit-login" type="submit" value="Sign-in" />
            <br></br>
            <input className="demo-user-btn" type="submit" value="Guest User" onClick={this.demoLogin}/>
            </div>
            {this.renderErrors()}
              <p className="signup-text">
                Don't have an account? 
                <br></br>
                <Link className="signup-link" to={'/signup'}> Sign-up here!</Link>
              </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
