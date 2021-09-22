import React, {useState} from "react";
import Presentation from "./presentation";
import {firestore} from "../../config/firebase";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getUsersBySubject = (id) => {  
    return firestore.collection('Users').doc(id).get().then(      
        doc => doc.ref.collection('Subjects').get().then(
            collection => {
              const subjectFromUser = [];
              collection.forEach(
                subj => {                
                  subjectFromUser.push({...subj.data()});
                }                
              );
              return subjectFromUser;
            }
          )        
      )   
  }

  return (
   <Presentation getSubjects={getUsersBySubject} activeTab={activeTab} />
  );
};

export default Profile;
