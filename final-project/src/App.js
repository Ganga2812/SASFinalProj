import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login.js' 
import fire from './fire.js';
import Main from './Main.js';



function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);


  const loginHandler = () =>  {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
            alert(err.message);
        });
  };

  const signUpHandler = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(err.message);
      });
    fire.auth().signInWithEmailAndPassword(email, password)
      
  };

  const logoutHandler = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        clearValues();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  
  useEffect(() => {
    authListener();
  }, []);

  const clearValues = () => {
    setEmail('');
    setPassword('');
  };
    


  
  return (
    <div>
      {user ? (
        <Main 
          logoutHandler = {logoutHandler}
        />
      ) : (
        <Login 
          email = {email}
          setEmail = {setEmail}
          password = {password}
          setPassword = {setPassword}
          loginHandler = {loginHandler}
          hasAccount = {hasAccount}
          setHasAccount = {setHasAccount}
          signUpHandler = {signUpHandler}
        />
      )} 
    </div>
  );
}

export default App;
