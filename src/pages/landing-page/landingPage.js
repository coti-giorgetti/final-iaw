import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import Header from './header'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: 'gray',
        backgroundSize: 'cover'

    }
}));

export default function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
        </div>
    )
}