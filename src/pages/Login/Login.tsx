import React, {FC} from "react";
import {Box, Button, Card, CardActions, CardContent, Container, Typography} from "@material-ui/core";
import {Form} from "../../components/form/Form/Form";
import {TextField} from "../../components/form/TextField";
import {LoginForm} from "./Login.types";
import {useHistory} from "react-router";
import {PROFILE} from "../../routing/routes";


export const Login: FC = () => {
    const history = useHistory();

    const handleSubmit = (value: LoginForm) => {
        history.push(PROFILE);
    }

    return <Container maxWidth="sm">
        <Card>
            <Form<LoginForm> onSubmit={handleSubmit} initialValues={{username: 'aaa', password: 'sad'}}>
                {(props) => {
                    return (
                        <>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Zaloguj się
                                </Typography>
                                <Box flexDirection='column' display='flex'>
                                    <TextField name='username'/>
                                    <TextField name='password' type='password'/>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' color='primary' type="submit">Zaloguj</Button>
                            </CardActions>
                        </>
                    )
                }}
            </Form>
        </Card>
    </Container>
}