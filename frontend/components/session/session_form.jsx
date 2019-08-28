import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user.username,
      email: this.props.user.email,
      password: this.props.user.password,
      renderedErrors: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    // TODO: Remove after getting a job
    this.demoLogin = this.demoLogin.bind(this);
    this.demoLoginHelper = this.demoLoginHelper.bind(this);
  }

  // TODO: Remove after getting a job
  componentDidMount() {
    this.state.username === 'Demo' ? this.demoLogin() : '';
  }

  demoLogin() {
    const emailArray = this.state.email.split('');
    const passwordArray = this.state.password.split('');
    this.state.email = '';
    this.state.password = '';
    this.demoLoginHelper(emailArray, passwordArray);
  }

  demoLoginHelper(emailArray, passwordArray) {
    if (emailArray.length > 0) {
      this.setState({
        email: this.state.email + emailArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(emailArray, passwordArray), 100);
        }
      );
    } else if (passwordArray.length > 0) {
      this.setState({
        password: this.state.password + passwordArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(emailArray, passwordArray), 10);
        }
      );
    } else {
      this.props.processForm({username: 'Demo', email: 'demo@email.com', password: 'password'}).then(this.props.closeModal);
    }
  }

  handleInput (field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.state.renderedErrors = true;

    let user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.processForm(user)
      .then(this.props.closeModal);

    if (this.props.errors.session !== []) {
      setTimeout(() => this.state.renderedErrors = false, 500);
    }
  }

  renderErrors() {

    return(
      <ul>
        <li>
          <span className={this.state.renderedErrors ? 'fading' : ''}>{this.props.errors[0]}</span>
        </li>
      </ul>
    );
  }

  render () {
    return (
      <div className="session-form">
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        <div className="modal-title">{this.props.formType}</div><br></br>

        <form className="login-form-box"  onSubmit={this.handleSubmit}>

          <label className={this.props.shouldHide ? 'hidden' : ''} onClick={e => e.stopPropagation()} >
            <section>
              <span>Username</span>
            </section>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>

          <label onClick={e => e.stopPropagation()}>
            <section>
              <span>Email</span>
            </section>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>

          <label onClick={e => e.stopPropagation()}>
            <section>
              <span>Password</span>
            </section>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>

          <div className="session-errors"><br></br>{this.renderErrors()}</div>

          <nav>
            <input type="submit" className="form-button" value={this.props.formType}></input>
            <div className="other-form-button">
              {this.props.otherForm}
            </div>
          </nav>

        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);