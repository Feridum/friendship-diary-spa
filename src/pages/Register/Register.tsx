import React, {FC} from "react";
import {Box, Button, Card, CardActions, CardContent, Container, makeStyles, Typography} from "@material-ui/core";
import {TextField} from "../../components/form/TextField";
import {Form} from "../../components/form/Form/Form";
import {useHistory} from "react-router";
import {LoginForm} from "../Login/Login.types";
import {register} from "../../requests/auth/actions";
import {LOGIN} from "../../routing/routes";
import {RegisterForm} from "./Register.types";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
    },
    card: {
        width: '100%'
    }
});

export const Register: FC = () => {
    const history = useHistory();
    const classes = useStyles();

    const handleSubmit = (value: LoginForm) => {
        register(value).then((response) => {
            if (response.error) {
                return;
            } else {
                history.push(LOGIN);
            }
        })

    }

    return <Container maxWidth="sm" className={classes.container}>
        <Card className={classes.card}>
            <Form<RegisterForm> onSubmit={handleSubmit}
                                initialValues={{username: '', password: '', firstname: '', lastname: ''}}>
                {(props) => {
                    return (
                        <>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Stwórz konto
                                </Typography>
                                <Box flexDirection='column' display='flex'>
                                    <TextField name='username'/>
                                    <TextField name='password'/>
                                    <TextField name='firstname'/>
                                    <TextField name='lastname'/>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' color='primary' type="submit">Zarejestruj
                                    się</Button>
                            </CardActions>
                        </>
                    )
                }}
            </Form>
        </Card>
    </Container>
}