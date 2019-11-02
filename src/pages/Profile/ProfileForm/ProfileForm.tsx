import React, {FC} from "react";
import {MainLayout} from "../../../components/layout/MainLayout/MainLayout";
import {Box, Button, CardActions, CardContent} from "@material-ui/core";
import {TextField} from "../../../components/form/TextField";
import {Form} from "../../../components/form/Form/Form";
import {ProfileFormProps, ProfileFormValues} from "./ProfileForm.types";


export const ProfileForm: FC<ProfileFormProps> = ({initialValues, onSave}) => {

    return (
        <MainLayout>
            <Form<ProfileFormValues> onSubmit={onSave} initialValues={initialValues}>
                {(props) => {
                    return (
                        <>
                            <CardContent>
                                <Box flexDirection='column' display='flex'>
                                    <TextField name='firstname'/>
                                    <TextField name='lastname'/>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' color='primary' type="submit">Zapisz</Button>
                            </CardActions>
                        </>
                    )
                }}
            </Form>
        </MainLayout>
    )
}