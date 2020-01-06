import React, {FC} from "react";
import {Box, Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {Edit} from "@material-ui/icons";
import {SingleMemoryProps} from "./SingleMemory.types";
import {Map, Marker, TileLayer} from "react-leaflet";

const useStyles = makeStyles({
        itemActions: {
            display: 'flex'
        },
        image: {
            height: 100,
            margin: 10,
        },
        mapContainer: {
            height: 100,
            margin: 10,
            '& .leaflet-container': {
                height: '100%',
            }
        },
        row: {
            padding: 10,
        }
    })
;

export const SingleMemory: FC<SingleMemoryProps> = ({isEditable, handleEdit, memory}) => {

    const classes = useStyles();

    return (
        <Box mt={2}>
            <Paper>
                <Grid container direction='row' justify='space-between' className={classes.row}>
                    <Grid item xs={2} sm={2}>
                        {memory.image && <img src={memory.image} className={classes.image}/>}
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Typography variant="h4">
                            Title: {memory.title}
                        </Typography>
                        <Typography variant="h6">
                            Description: {memory.description}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <Box className={classes.mapContainer}>
                            <Map center={{lat: memory.localization.latitude, lng: memory.localization.longitude}}
                                 zoom={13}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker
                                    position={{lat: memory.localization.latitude, lng: memory.localization.longitude}}/>}
                            </Map>
                        </Box>
                    </Grid>
                    <Grid item alignItems='center' className={classes.itemActions}>
                        {isEditable && <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Edit/>}
                            onClick={() => handleEdit(memory.id)}
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