import React from 'react'
import { Drawer as MUIDrawer, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@material-ui/core'


export const Drawer = () => {
    return (
        <div>
            <MUIDrawer open={false}>
                <List>
                    {['Marathi','English','Hindi'].map((text,index)=>(
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </MUIDrawer>
        </div>
    )
}
