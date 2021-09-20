import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import HomeLayout from "./components/layouts/home-layout";
import ResetPassword from "./pages/reset-password";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/resetPassword">
            <ResetPassword />
          </Route>
          <HomeLayout>
            <Route path="/home"></Route>
          </HomeLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
