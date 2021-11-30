import { makeStyles } from '@material-ui/core';
import { styles } from '../Utils/ContentStyle';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles(styles);

export const AppBarButtons = () => {
    const classes = useStyles();
    const poemLanguage = useSelector((state) => state.poems.plang);

    console.log(' poem language ' + poemLanguage);

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
                    to={`/content/` +  poemLanguage + '/' + item.feature}
                    key={item.feature}
                    className={classes.menuLink}
                    >
                    {item.feature}
                </Link>

                ))}


        </div>
    )
}
