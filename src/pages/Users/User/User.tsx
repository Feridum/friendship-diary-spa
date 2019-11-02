import React, {FC} from "react";
import {Box, Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {UserProps} from "./User.types";

const useStyles = makeStyles({
        itemActions: {
            display: 'flex'
        },
    })
;

export const User: FC<UserProps> = ({user, action, actionType}) => {

    const classes = useStyles();

    return (
        <Box mt={2}>
            <Paper>
                <Grid container direction='row'>
                    <Grid item xs={8} sm={8}>
                        <Typography variant="h6">
                            Title
                        </Typography>
                    </Grid>
                    <Grid item alignItems='center' className={classes.itemActions}>
                        <Button
                            variant="contained"
                            color={actionType}
                            onClick={() => action(user.uuid)}
                            size='small'
                        >
                            Edytuj
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}