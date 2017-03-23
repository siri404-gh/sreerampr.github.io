import React, {Component, PropTypes} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const responseFacebook = (response) => {
  console.log('facebook', response);
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
const responseGoogle = (response) => {
  console.log('google', response);
};
class Login extends Component {
  render() {
    return <section>
      <FacebookLogin
        appId="597773280411232"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />
      <GoogleLogin
        clientId={'41677622953-s8jm5t8piglhud46no8u2b1d27sec9h8.apps.googleusercontent.com'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        offline={false}/>
    </section>
  }
}

export default Login;
