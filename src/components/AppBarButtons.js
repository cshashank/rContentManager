import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { styles } from '../Utils/ContentStyle';
import { useHistory,Link } from 'react-router-dom';

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
    const history = useHistory();
    const handleFeature=(feature)=>{
       // history.push('/content1/lang1/'+feature);
    }

    return (
        <div>
            {tempButtons.map((item, index) => (
                <Button 
                    className={item.active? classes.enabledButton:classes.disabledButton}
                    key={item.feature}
                    name={item.feature}
                    onClick={handleFeature(item.feature)}>
                    {item.feature}
                </Button>
            ))}
            <Link to="/content1/english/poem">English1</Link>
        </div>
    )
}
