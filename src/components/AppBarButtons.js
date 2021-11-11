import { Button, ButtonGroup } from '@material-ui/core';

export const AppBarButtons = () => {

    let tempButtons = {
        "lang": 'btn1',
        "lang": 'btn2', 
        "lang": 'btn3', 
        "lang": 'btn4'
    }

    return (
        <div>
            ButtonsBar
            {tempButtons.map((item, index) => {
                <Button
                    id={item.lang}
                    variant="contained"
                    name="btnEnglish"                      >
                    English
                </Button>
            })}
        </div>
    )
}
