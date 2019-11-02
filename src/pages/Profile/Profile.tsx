import React, {FC} from "react";
import {MainLayout} from "../../components/layout/MainLayout/MainLayout";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {AccountCircle, Edit} from "@material-ui/icons";
import {PROFILE_EDIT} from "../../routing/routes";
import {useHistory} from "react-router-dom";


export const Profile: FC = () => {

    const history = useHistory();

    return (
        <>
            <MainLayout>
                <Box mt={4}>
                    <Box display='flex' justifyContent='flex-end' mb={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<Edit/>}
                            onClick={() => history.push(PROFILE_EDIT)}
                        >
                            Edytuj
                        </Button>
                    </Box>
                    <Grid container direction='row'>
                        <Grid item xs={2} sm={2}>
                            <AccountCircle fontSize='large'/>
                        </Grid>
                        <Grid item xs={10} sm={10}>
                            <Typography variant="h6">
                                Imię
                            </Typography>
                            <Typography variant="h6">
                                Nazwisko
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </MainLayout>
        </>
    )
}