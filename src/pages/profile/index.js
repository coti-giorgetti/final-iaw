import React from "react";
import Presentation from "./presentation";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [meetings, setMeetings] = React.useState([]);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  React.useEffect(() => {
    const data = [
      {
        date: new Date(2012, 2, 12),
        user: "Manuela Fernandez",
        subject: "Resolución de problemas y algoritmos",
      },
      {
        date: new Date(2012, 3, 12),
        user: "Federico Virkel",
        subject: "Lenguajes formales y autómatas",
      },
      {
        date: new Date(2013, 9, 20),
        user: "Micaela Melo",
        subject: "Teoría de la computabilidad",
      },
    ];

    setMeetings(data);
  }, []);

  return (
    <Presentation
      onTabChange={handleTabChange}
      activeTab={activeTab}
      meetings={meetings}
    />
  );
};

export default Profile;
