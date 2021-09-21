import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import HomeLayout from "./components/layouts/home-layout";
import Home from "./pages/home";
import LandingPage from './pages/landing-page/landingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <HomeLayout>
            <Route path="/home">
              <Home />
            </Route>
          </HomeLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
