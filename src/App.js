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
          <NotLoggedRoute path="/login">
            <Login />
          </NotLoggedRoute>
          <NotLoggedRoute path="/register">
            <SignUp />
          </NotLoggedRoute>
          <NotLoggedRoute path="/forgotPassword">
            <ForgotPassword />
          </NotLoggedRoute>
          <NotLoggedRoute path="/resetPassword">
            <ResetPassword />
          </NotLoggedRoute>
          <PrivateRoute component={Home} layout={HomeLayout} path="/home"/>
          <PrivateRoute component={Profile} layout={HomeLayout} path="/profile"/>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => {  
  return (
    <Route 
      {...rest}
      render={(props) => isAuthenticated() 
        ? <Layout {...props}> <Component {...props}/> </Layout>
        : <Redirect to={{pathname: '/login'}}/>}
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
