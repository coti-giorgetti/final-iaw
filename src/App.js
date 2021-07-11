import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Profile from "./pages/profile";
import HomeLayout from "./components/layouts/home-layout";

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
          <HomeLayout>
            <Route path="/home"></Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </HomeLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
