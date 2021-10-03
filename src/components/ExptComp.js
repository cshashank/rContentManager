import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../Utils/ContentStyle';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(styles);

const ExptComp =  props  => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card} key="12">
                <CardContent>
                    <Typography variant="normal" color="primary">
                        <a target="_blank" id="t1" href='aaa' rel="noreferrer">
                            {props.name}
                        </a>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ExptComp