import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password).then(function(){
      console.log("successfully signed up");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password).then(function() {
      console.log("successfully signed in");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut(event) {
    event.preventDefault();
    const auth = getAuth();

    signOut(auth).then(function(){
      console.log("successfully signed out");
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return(
    <React.Fragment>
      <h2>Sign Up</h2>
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>

      <h2>Sign In</h2>
      <form onSubmit={doSignIn}>
        <input type="text" name="signInEmail" placeholder="Email" />
        <input type="password" name="signInPassword" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>

      <h2>Sign Out</h2>
      <button onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  )

}

export default Signin;