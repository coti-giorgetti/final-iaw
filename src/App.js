import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import HomeLayout from "./components/layouts/home-layout";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <NotLoggedRoute path="/login">
            <Login />
          </NotLoggedRoute>
          <NotLoggedRoute path="/register">
            <SignUp />
          </NotLoggedRoute>
          <HomeLayout>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </HomeLayout>
        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({children, ...rest}) => {  
  return (
    <Route 
      {...rest}
      render={() => isAuthenticated() ? children : <Redirect to={{pathname: '/login'}}/>}
    />
  )
}

const NotLoggedRoute = ({children, ...rest}) => {  
  return (
    <Route 
      {...rest}
      render={() => !isAuthenticated() ? children : <Redirect to={{pathname: '/home'}}/>}
    />
  )
}

const isAuthenticated = () => {
  return localStorage.getItem('user') ? true : false;
}

export default App;
