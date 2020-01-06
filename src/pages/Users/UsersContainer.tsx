import React, {FC, useEffect, useState} from "react";
import {Users} from "./Users";
import {User} from "./User/User.types";
import {getMemories} from "../../requests/memories/actions";
import {getUsers} from "../../requests/users/users";
import {FRIENDS, LOGIN} from "../../routing/routes";
import {useHistory} from "react-router";
import {addFriend} from "../../requests/friends/actions";

export const UsersContainer: FC = () => {
    const history = useHistory();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then((response) => {
            if (response.error)
                history.push(LOGIN);
            setUsers(response.items);
        })
    }, [getMemories]);


    const addNewFriend = (id: string) => addFriend(id).then(() => {
        history.push(FRIENDS);
    })

    return <Users action={addNewFriend} actionType='primary' users={users}/>
}