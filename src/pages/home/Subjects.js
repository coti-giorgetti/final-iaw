import React from 'react';
import Subject from './Subject';
import {firestore} from "../../config/firebase";

const Subjects = ({filteredSubjects}) => {
   const getUsersBySubject = (id) => {  
    return firestore.collection('Subjects').doc(id).get().then(      
        doc => doc.ref.collection('UsersAdded').get().then(
            collection => {
              const users = [];
              collection.forEach(
                user => {                
                  users.push({...user.data()});
                }                
              );
              return users;
            }
          )        
      )   
  }

  return (
    filteredSubjects.map(subject => <Subject subject={subject} getUsers={getUsersBySubject} key={subject.key} />)
  )
}

export default Subjects;