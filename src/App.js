//import logo from "./logo.svg";
import "./App.css";
import  {useAuth0} from '@auth0/auth0-react'

function App() {
  const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <h1>Welcome to OAuth demo</h1>
      <button onClick={loginWithPopup}>Login with popup</button> <br />
      <button onClick={loginWithRedirect}>Login with redirect</button>
      <br />
      <button onClick={logout}>Logout</button>
      <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
