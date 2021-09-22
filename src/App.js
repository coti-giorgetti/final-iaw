import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";
import HomeLayout from "./components/layouts/home-layout";
import Home from "./pages/home";
import LandingPage from './pages/landing-page/landingPage'
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome">
            <LandingPage />
          </Route>
          <NotLoggedRoute path="/login">
            <Login />
          </NotLoggedRoute>
          <NotLoggedRoute path="/register">
            <SignUp />
          </NotLoggedRoute>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <HomeLayout>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          
            <PrivateRoute path="/profile">
              <Profile />
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
