import React from "react";
import Presentation from "./presentation";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return <Presentation onTabChange={handleTabChange} activeTab={activeTab} />;
};

export default Profile;
