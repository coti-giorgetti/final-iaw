import React from 'react';
import Subject from './Subject';
import {firestore} from "../../config/firebase";

const Subjects = (filteredSubjects) => {

   async function handleModal(cod){
    const getUsersBySubject = [];
    const subjectsRef = firestore.collection('Subjects');
    const snapshot = await subjectsRef.where('code', '==', cod).get();
    snapshot.forEach(doc => {
        const usersRef = doc.ref
            .collection('UsersAdded')
            .onSnapshot((querySnapShot) => {
                querySnapShot.forEach((docUser) => {
                    getUsersBySubject.push({...docUser.data(), key: docUser.id});
                });
        });
    })
    console.log(getUsersBySubject)
    return getUsersBySubject
  }

  return (
    filteredSubjects.filteredSubjects.map(subject => <Subject subject={subject} getUsers={handleModal} key={subject.key}/>)
  )
}

export default Subjects;