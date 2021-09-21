import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import logo from '../../assets/images/icon-logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appBar: {
        background: 'none',
        fontFamily: 'Nunito'
    },
    appbarTitle: {
        
    },
    colorText: {
        color: '#93E1AA'
    },
    title: {
        color: 'white',
        fontFamily: 'Nunito',
        fontSize: '4.5rem'
    },
    description: {
        color: 'white',
        fontSize: '1rem'
    },
    buttons:{
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    appbarWrapper: {
        width: '80%'
    }
}))

export default function Header(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <img src={logo} width="60" height="50" alt="Hubbl Logo"/>                   
                </Toolbar>
            </AppBar>
            <div>
                <h1 className={classes.title}>
                   Bienvenido a <br/> <span className={classes.colorText}>Hub</span>bl!
                </h1>
                <p className={classes.description}>
                    Si sos estudiante del DCIC, esta app es para vos! <br/>
                    ¿Tenés que rendir un final y no querés prepararlo solo? Con Hubbl vas a poder conocer <br/>
                    a otros alumnos del Departamento que tengan que preparar el mismo final que vos. <br/>
                    Compartí resumenes, libros y carpetas con ellos. <br/>
                    Conectate y estudiá ya! 
                </p>
                <div className={classes.buttons}>
                    <Button href="/login" color="primary" size="large">Iniciar sesión</Button>
                    <Button href="/register" color="primary" size="large">Registrarme</Button>
                </div>
            </div>
        </div>
    )
}



