import * as appPropTypes        from 'constants/propTypes';
import containerFactory         from 'containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(class Register extends PureComponent {
  static propTypes = {
    auth        : appPropTypes.auth,
    authActions : appPropTypes.actions,
  }

  state = {
    email    : '',
    password : '',
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.auth.get('isLoggedIn') && nextProps.auth.get('isLoggedIn')) {
      this.props.history.push('/survey');
    }
  }

  handleEmailChange = (event) => this.setState({ email : event.currentTarget.value })
  handlePasswordChange = (event) => this.setState({ password : event.currentTarget.value })

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.authActions.register(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className={ styles.Root }>
        <h1 className={ styles.Title }>Sign Up</h1>

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
