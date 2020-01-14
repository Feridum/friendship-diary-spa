import React, {FC} from "react";
import {Box, Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {UserProps} from "./User.types";

const useStyles = makeStyles({
        itemActions: {
            display: 'flex'
        },
        row: {
            padding: 10
        }
    })
;

export const User: FC<UserProps> = ({user, action, actionType, actionLabel}) => {

    const classes = useStyles();

    return (
        <Box mt={2}>
            <Paper>
                <Grid container direction='row' justify='space-between' className={classes.row}>
                    <Grid item xs={8} sm={8}>
                        <Typography variant="h6">
                            {`${user.firstname} ${user.lastname}`}
                        </Typography>
                    </Grid>
                    <Grid item className={classes.itemActions}>
                        <Button
                            variant="contained"
                            color={actionType}
                            onClick={() => action(user.username)}
                            size='small'
                        >
                            {actionLabel}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}