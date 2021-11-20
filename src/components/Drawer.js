import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { rActions } from '../slices/poemSlice';

import { Drawer as MUIDrawer, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@material-ui/core'


export const Drawer = () => {

    const drawerState = useSelector((state) => state.poems.drawerOpen);
    console.log('drawerState is '+drawerState)
    const dispatch = useDispatch();

    const drawerClick = () => {
        console.log('menu click');
        dispatch(rActions.toggleDrawer(false));
    }

    return (
        <div>
            <MUIDrawer open={drawerState} >
                <List>
                    {['Marathi','English','Hindi'].map((text,index)=>(
                        <ListItem button key={text} onClick={drawerClick}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>
        </div>
    )
}
