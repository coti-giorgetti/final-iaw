import React, { useEffect, useState } from "react";
import Presentation from "./presentation";
import {firestore} from "../../config/firebase";
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [subjects,setSubjects] = useState([]);


    useEffect(() => {
        const getSubjectsFromFirebase = [];
        const subscriber = firestore
            .collection('Subjects')
            .onSnapshot((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                    getSubjectsFromFirebase.push({...doc.data(), key: doc.id});
                });
                setSubjects(getSubjectsFromFirebase);
                setLoading(false);
            });
            return () => subscriber();
    },[]);

    if(loading) {
        return (
            <CircularProgress />
        )
    }
    return (
       <Presentation subjects={subjects}/>
    );
};

export default Home;
