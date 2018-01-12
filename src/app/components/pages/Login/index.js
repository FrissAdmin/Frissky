import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import redirectFromLoginPage    from 'lib/redirectFromLoginPage';
import styles                   from './styles';

export default containerFactory(class Login extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  state = {
    email    : '',
    password : '',
  }

  componentWillMount() {
    if (this.props.auth.get('user') !== null) {
      this.props.history.push(redirectFromLoginPage(this.props.auth.get('user')));
    }
  }

  handleEmailChange = (event) => this.setState({ email : event.currentTarget.value })
  handlePasswordChange = (event) => this.setState({ password : event.currentTarget.value })

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.authActions.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Log In</h1>

          <form className={ styles.Form } onSubmit={ this.handleSubmit }>
            <div className={ styles.InputField }>
              <label className={ styles.Label }>Email</label>
              <input
                className={ styles.Input }
                onChange={ this.handleEmailChange }
                type="text"
                value={ this.state.email }
              />
            </div>

            <div className={ styles.InputField }>
              <label className={ styles.Label }>Password</label>
              <input
                className={ styles.Input }
                onChange={ this.handlePasswordChange }
                type="password"
                value={ this.state.password }
              />
            </div>

            <button className={ styles.Button } type="submit">Log In</button>
          </form>
      </div>
    );
  }
});
