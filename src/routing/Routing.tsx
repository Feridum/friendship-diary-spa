import * as Routes from './routes';
import {Login} from "../pages/Login/Login";
import React, {FC} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {Profile} from "../pages/Profile/Profile";
import {AddMemoryContainer} from "../pages/Memories/Add/AddMemoryContainer";
import {ProfileFormContainer} from "../pages/Profile/ProfileForm/ProfileFormContainer";
import {ListContainer} from "../pages/Memories/List/ListContainer";
import {DraftListContainer} from "../pages/Memories/List/DraftListContainer";
import {FriendsContainer} from "../pages/Friends/FriendsContainer";
import {UsersContainer} from "../pages/Users/UsersContainer";
import {Register} from "../pages/Register/Register";
import {EditMemoryContainer} from "../pages/Memories/Edit/EditMemoryContainer";


export const Routing: FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={Routes.LOGIN} component={Login}/>
                <Route exact path={Routes.REGISTER} component={Register}/>
                <Route exact path={Routes.PROFILE} component={Profile}/>
                <Route exact path={Routes.PROFILE_EDIT} component={ProfileFormContainer}/>
                <Route exact path={Routes.ADD_MEMORY} component={AddMemoryContainer}/>
                <Route exact path={Routes.MEMORIES} component={ListContainer}/>
                <Route exact path={Routes.MEMORIES_DRAFT} component={DraftListContainer}/>
                <Route exact path={Routes.EDIT_MEMORY} component={EditMemoryContainer}/>
                <Route exact path={Routes.FRIENDS} component={FriendsContainer}/>
                <Route exact path={Routes.USERS} component={UsersContainer}/>
                <Redirect to={Routes.LOGIN}/>
            </Switch>
        </Router>
    )
}