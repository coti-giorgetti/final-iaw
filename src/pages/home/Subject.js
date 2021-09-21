import React,{useState} from 'react';
import { Chip, IconButton, Tooltip } from '@material-ui/core';
import {PersonAdd, PersonAddDisabled} from '@material-ui/icons';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { firestore } from "../../config/firebase";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginTop: '10px',
      marginBottom: '25px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
    },
    accordion: {
        backgroundColor: 'whiteSmoke'
    },
    accordionDetails: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
    },
    userDetails: {
        display: 'flex',
        flex: 1
    },
    accordionDetailsHeader: {        
        display: 'flex',
        justifyContent: 'space-between'
    },
    chip: {
        marginRight: '5px'
    },
    chipLCC: {
        backgroundColor: '#90caf9'
    },
    chipISI: {
        backgroundColor: '#ffecb3'
    },
    chipIC: {
        backgroundColor: '#e57373'
    },
  }));

const Subject = ({subject,getUsers}) => {    
    const [isToggleOn, setToggleOn] = useState(true);
    const [usersBySubject,setUsersBySubject] = useState(undefined);    

    const handleClickModal = () => {        
        getUsers(subject.key).then(
            users => setUsersBySubject(users)
        );
    }

    const classes = useStyles();
    
    const handleClick = () => {
        const loggedUser = {
            firstName: "coti",
            lastName: "giorgetti",
            email: "coti.malibu2@gmail.com"
        };

        if(isToggleOn){
            addUser(subject.key, loggedUser)
        }
        else { 
            deleteUser(subject.key, loggedUser)
        }
        setToggleOn(!isToggleOn);
    }

    const addUser = (subjectId, user) => {        
        firestore.collection('Subjects').doc(subjectId).get().then(
            doc => doc.ref.collection('UsersAdded').add(user)
        );
        
        if (usersBySubject) {
            usersBySubject.push({...user});
        }
        else {
            setUsersBySubject([{...user}]);
        }
    }

    const deleteUser = (subjectId, user) => {
        firestore.collection('Subjects').doc(subjectId).get().then(
            doc => {
                doc.ref.collection('UsersAdded').where('email', '==', user.email).get().then(
                    users => users.forEach(u => u.ref.delete())
                );                
            }
        );

        if (usersBySubject) {
            const filteredUsers = usersBySubject.filter(u => u.email !== user.email);

            if (filteredUsers.length >= 0) {
                setUsersBySubject(filteredUsers);
            }
        }        
    }
  
    return(
        <div className={classes.root}>
            <Accordion className={classes.accordion}>
                <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        onClick={handleClickModal}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography className={classes.heading}>{subject.name} - (Cod: {subject.code})</Typography>
                </AccordionSummary>
                <hr/>
                <AccordionDetails className={classes.accordionDetails}>
                    <div className={classes.accordionDetailsHeader}>
                        <div className={classes.chips}>                            
                            {subject.careers.map(career => <Chip label={career === 1 ? 'LCC' : career === 2 ? 'ISI' : 'IC'} className={[classes.chip, career === 1 ? classes.chipLCC : career === 2 ? classes.chipISI : classes.chipIC]}/>)}                        
                        </div>
                        <IconButton onClick={handleClick} color="inherit">
                            {isToggleOn ? 
                            <Tooltip title="Postularme" placement="top-start">
                                <PersonAdd />
                            </Tooltip> : 
                            <Tooltip title="Quitar postulacion" placement="top-start">
                                <PersonAddDisabled />
                            </Tooltip>}
                        </IconButton>
                    </div>
                    <Typography>
                        {usersBySubject ? 
                            usersBySubject.length > 0  
                                ? <ul>{usersBySubject.map(user => <li><User user={user} /></li>)}</ul>
                                : "No hay alumnos"
                            : 'Cargando...'
                        }
                    </Typography>
                </AccordionDetails>
        </Accordion>
    </div>
    )
}

const User = ({user}) => {
    const classes = useStyles();

    return (
        <Typography className={classes.userDetails}>
            {user.firstName} {user.lastName} {user.email}
        </Typography> 
    )
}

export default Subject;