import React, {Component, PropTypes} from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}
const onSignIn = (googleUser) => {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
};
const signOut = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
};
const componentClicked = () => {

};

class Login extends Component {
  render() {
    return <section>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
      <FacebookLogin
          appId="597773280411232"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook} />
    </section>
  }
}

export default Login;
