import React, {FC} from "react";
import {MainLayout} from "../../../components/layout/MainLayout/MainLayout";
import {Box, Button, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";
import {TextField} from "../../../components/form/TextField";
import {Form} from "../../../components/form/Form/Form";
import {MemoryFormProps, MemoryFormValues} from "./MemoryForm.types";
import {Map, Marker, TileLayer} from 'react-leaflet';
import * as Leaflet from "leaflet";
import {ImageField} from "../../../components/form/ImageField";
import {Autocomplete} from "../../../components/form/Autocomplete/Autocomplete";

const useStyles = makeStyles({
        mapContainer: {
            height: 400,
            '& .leaflet-container': {
                height: '100%',
            }
        },
        actions: {
            justifyContent: 'space-between'
        }
    })
;


export const MemoryForm: FC<MemoryFormProps> = ({initialValues, onCancel, onDraftSave, onSave}) => {
    const classes = useStyles();

    const handleSubmit = (values: MemoryFormValues) => {
        onSave(values)
    };

    const handleDraftSubmit = (values: MemoryFormValues) => {
        onDraftSave(values)
    }

    return (
        <MainLayout>
            <Form<MemoryFormValues>
                onSubmit={handleSubmit}
                initialValues={initialValues}
                mutators={{
                    onMapClick: (args, state, tools) => {
                        const event: Leaflet.LeafletMouseEvent = args[0];
                        tools.changeValue(state, 'localization', () => event.latlng);
                    },
                }}
            >
                {(props) => {
                    return (
                        <>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Dodaj wspomnienie
                                </Typography>
                                <Box flexDirection='column' display='flex'>

                                    <Box mt={2} flexDirection='column' display='flex'>
                                        <ImageField name='image' label="Zdjęcie"/>
                                    </Box>
                                    <TextField name='title' label='Tytuł'/>
                                    <TextField name='description' label="Opis"/>

                                    <Box className={classes.mapContainer}>
                                        <Map center={props.values.localization} zoom={13}
                                             onclick={props.form.mutators.onMapClick}>
                                            <TileLayer
                                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            {props.values.localization &&
                                            <Marker position={props.values.localization}/>}
                                        </Map>
                                    </Box>


                                    <Box mt={2} flexDirection='column' display='flex'>
                                        <Autocomplete
                                            name='friends'
                                            placeholder='Wybierz przyjaciół z którymi dzielisz wspomnienie'
                                            options={['test', 'test2'].map(value => ({label: value, value}))}
                                            isMulti={true}
                                        />
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions className={classes.actions}>
                                <Button size="small" variant='contained' color='secondary'
                                        onClick={onCancel}>Anuluj</Button>
                                <div>
                                    <Button size="small" variant='outlined' color='primary'
                                            onClick={() => handleDraftSubmit(props.values)}>
                                        Zapisz wersję roboczą
                                    </Button>
                                    <Button size="small" variant='contained' color='primary'
                                            type="submit">Zapisz</Button>
                                </div>
                            </CardActions>
                        </>
                    )
                }}
            </Form>
        </MainLayout>
    )
}