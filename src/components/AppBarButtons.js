import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { styles } from '../Utils/ContentStyle';


const useStyles = makeStyles(styles);

export const AppBarButtons = () => {
    const classes = useStyles();

    let tempButtons = [{
        "feature": 'poem',
        "active":true
    }, {
        "feature": 'article',
        "active": false
    }, {
        "feature": 'video',
        "active": false
    }]

    return (
        <div>
            {tempButtons.map((item, index) => (
                <Button 
                    className={classes.enabledButton}
                    id={item.feature}
                    name={item.feature}                      >
                    {item.feature}
                </Button>
            ))}
        </div>
    )
}
