import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

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

export default function Navbar() {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open);
  };


  const classes = useStyles();
  return (
    <AppBar style={{ background: '#000200' }} position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          <RouterLink to='/'> App Bar</RouterLink>
        </Typography>
        <div className={classes.navlinks}>
          {['Info', 'Work'].map((item) => (
            <RouterLink to={item} className={classes.link}>
              {item}
            </RouterLink>
          ))}
           <div to={'Photo'} className={classes.link} onClick={handleClick}>
              {'Photo'}
            
            {open ? <ExpandLess /> : <ExpandMore />}
            <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="2020" />
            <ListItemText primary="2021" />
          </ListItemButton>
        </List>
      </Collapse></div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
