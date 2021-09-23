import React from "react";
import { useHistory } from "react-router";
import Presentation from "./presentation";

const HomeLayout = ({ children }) => {

  const history = useHistory();

  const logout = () => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
      history.push('/login');
    }
  }

  return <Presentation children={children} logout={logout}/>;
};

export default HomeLayout;
