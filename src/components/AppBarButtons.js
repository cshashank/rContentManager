import { makeStyles } from '@material-ui/core';
import { styles } from '../Utils/ContentStyle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export const AppBarButtons = () => {
    const classes = useStyles();

    let tempButtons = [{
        "feature": 'Poem',
        "active":true
    }, {
        "feature": 'Article',
        "active": false
    }, {
        "feature": 'Video',
        "active": false
    }]

    return (
        <div>
            {tempButtons.map((item, index) => (

                <Link 
                    to={`/content1/english/` + item.feature}
                    key={item.feature}
                    className={classes.menuLink}
                    >
                    {item.feature}
                </Link>

                ))}


        </div>
    )
}
