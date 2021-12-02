import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: 2,
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '17px',
    marginLeft: 90,
    '&:hover': {
      color: '#707070',
    },
  },
}));

export default function ElevateAppBar() {
  const classes = useStyles();
  return (
    <AppBar style={{ background: '#000200' }} position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          <RouterLink to='/'> App Bar</RouterLink>
        </Typography>
        <div className={classes.navlinks}>
          {['Info', 'Photo', 'Work'].map((item) => (
            <RouterLink to={item} className={classes.link}>
              {item}
            </RouterLink>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
