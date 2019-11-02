import React, {FC} from "react";
import {Box, Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Edit} from "@material-ui/icons";
import {SingleMemoryProps} from "./SingleMemory.types";

const useStyles = makeStyles({
        itemActions: {
            display: 'flex'
        },
    })
;

export const SingleMemory: FC<SingleMemoryProps> = ({isEditable, handleEdit, memory}) => {

    const classes = useStyles();

    return (
        <Box mt={2}>
            <Paper>
                <Grid container direction='row'>
                    <Grid item xs={2} sm={2}>
                        <img src={''}/>
                    </Grid>
                    <Grid item xs={8} sm={8}>
                        <Typography variant="h4">
                            Title
                        </Typography>
                        <Typography variant="h6">
                            Description
                        </Typography>
                    </Grid>
                    <Grid item alignItems='center' className={classes.itemActions}>
                        {isEditable && <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Edit/>}
                            onClick={() => handleEdit(memory.uuid)}
                            size='small'
                        >
                            Edytuj
                        </Button>
                        }
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}