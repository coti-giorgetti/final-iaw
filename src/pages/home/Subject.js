import React,{useState} from 'react';
import {Paper, IconButton, Tooltip} from '@material-ui/core';
import {Visibility, PersonAdd, PersonAddDisabled} from '@material-ui/icons';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import MaterialModal from "../modalUsers/Modal";
import {firestore} from "../../config/firebase";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Subject = ({subject,getUsers}) => {
    const [isToggleOn, setToggleOn] = useState(true);
    const [open, setOpen] = useState(false);
    const [usersBySubject,setUsersBySubject] = useState([]);
    const [totalUsersBySubject, setTotalUsersBySubject] = useState(0);


    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    const classes = useStyles();

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
           setUsersBySubject(getUsersBySubject)
           setTotalUsersBySubject(getUsersBySubject.length)
           console.log(getUsersBySubject)
           console.log(getUsersBySubject.length)
        })
        
    }
    
    function handleClick(cod){
        if(isToggleOn){
            addUser(cod)
        }
        else { 
            deleteUser(cod)
        }
        setToggleOn(!isToggleOn);
    }

    async function addUser(cod){
        const subjectsRef = firestore.collection('Subjects');
        const snapshot = await subjectsRef.where('code', '==', cod).get();
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            doc.ref.collection('UsersAdded')
                    .add({
                        firstName: "coti",
                        lastName: "giorgetti",
                        email: "coti.giorgetti2@gmail.com"
                    })
        });
    }

    async function deleteUser(cod) {
        const subjectsRef = firestore.collection('Subjects');
        const snapshot = await subjectsRef.where('code', '==', cod).get();
        snapshot.forEach(async (doc) => {
            const usersRef = doc.ref.collection('UsersAdded');
            const userDocs = await usersRef.where('email', '==', 'coti.giorgetti2@gmail.com').get();
            userDocs.forEach(userDoc => {
                userDoc.ref.delete();
            })
        })
    }
  
    return(
        <div className={classes.root}>
            <IconButton onClick={() => handleClick(subject.code)} color="inherit">
                        {isToggleOn ? 
                        <Tooltip title="Postularme" placement="top-start">
                            <PersonAdd />
                        </Tooltip> : 
                        <Tooltip title="Quitar postulacion" placement="top-start">
                            <PersonAddDisabled />
                        </Tooltip>}
                        </IconButton>
            <Accordion>
            <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    onClick={() => getUsers(subject.code)}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                <Typography className={classes.heading}>{subject.name} - (Cod: {subject.code})</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>

                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
    )
}

export default Subject;