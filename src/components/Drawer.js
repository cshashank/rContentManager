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

    const drawerClick = (drawerLanguage) => {
       dispatch(rActions.toggleDrawer(false));
    dispatch(rActions.setLanguage(drawerLanguage));
    }

    return (
        <div>
            <MUIDrawer open={drawerState} >
                <List>
                    {['Marathi','English','Hindi'].map((text,index)=>(
                        <ListItem button key={text} 
                            onClick={() => drawerClick(text)}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>
        </div>
    )
}
