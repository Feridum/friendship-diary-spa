import React, {FC} from "react";
import {MainLayout} from "../../components/layout/MainLayout/MainLayout";
import {UsersProps} from "./Users.types";
import {User} from "./User/User";


export const Users: FC<UsersProps> = ({users, actionType, action}) => {

    return (
        <MainLayout>
            {users.map(user => (<User user={user} actionType={actionType} action={action}/>))}
        </MainLayout>
    )
}