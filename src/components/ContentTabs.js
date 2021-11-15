import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from '../Utils/ContentStyle';
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { rActions } from '../slices/poemSlice';
import ContentManager from './ContentManager';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBarButtons } from './AppBarButtons';
import List from '@mui/material/List';
import { ListItemButton, ListItemText } from '@mui/material';

const useStyles = makeStyles(styles);

const ContentTabs = props => {

    const classes = useStyles();

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        console.log('menu info ');
        setNavbarOpen(prev => !prev)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <List>
                            <ListItemButton component="a" href="#simple-list">
                                <MenuIcon onClick={handleToggle}/>
                            </ListItemButton>
                            <ListItemButton onClick={handleToggle} 
                                className={classes.hideListItem} 
                                component="a" href="#simple-list">
                                <ListItemText primary="Marathi" />
                            </ListItemButton>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="English" />
                            </ListItemButton>
                        </List>
                    </IconButton>
                    <Typography className={classes.enabledMenu}>
                        <AppBarButtons />
                    </Typography>
                </Toolbar>
            </AppBar>
            <ContentManager />
        </div>
    );
};
export default ContentTabs;