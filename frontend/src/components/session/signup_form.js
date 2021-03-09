import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
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
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
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
      <div className="splash">
      <div> 
          <div className="signup-form-box">
          <h1>Internet Bingo - Add User</h1>

            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
                  <input type="text"
                    className="input-field"
                    value={this.state.handle}
                    onChange={this.update('handle')}
                    placeholder="Username"
                  />
                <br/>
                  <input type="password"
                    className="input-field"                
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                <br/>
                  <input type="password"
                    className="input-field"
                    value={this.state.password2}
                    onChange={this.update('password2')}
                    placeholder="Confirm Password"
                  />
                <br/>
                <input className="submit-btn" type="submit" value="Create Account" />
                {this.renderErrors()}
                  <p>
                    Already have an account?  
                    <Link className="signup-link" to={'/'}> Sign-in here!</Link>
                  </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
