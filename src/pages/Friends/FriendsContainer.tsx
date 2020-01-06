import React, {FC, useEffect, useState} from "react";
import {Users} from "../Users/Users";
import {getMemories} from "../../requests/memories/actions";
import {deleteFriend, getFriends} from "../../requests/friends/actions";
import {User} from "../Users/User/User.types";
import {LOGIN} from "../../routing/routes";
import {useHistory} from "react-router";

export const FriendsContainer: FC = () => {
    const history = useHistory();
    const [friends, setFriends] = useState<User[]>([]);

    useEffect(() => {
        getFriends().then((response) => {
            if (response.error)
                history.push(LOGIN);
            setFriends(response.items);
        })
    }, [getMemories]);

    const deleteExistingFriend = (id: string) => deleteFriend(id).then(() => {
        getFriends().then((response) => {
            if (response.error)
                history.push(LOGIN);
            setFriends(response.items);
        })
    })

    return <Users action={deleteExistingFriend} actionType='secondary' users={friends}/>
}