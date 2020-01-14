import React, {FC, useEffect, useState} from "react";
import {MemoryForm} from "../Form/MemoryForm";
import {useHistory} from "react-router";
import {MEMORIES, MEMORIES_DRAFT} from "../../../routing/routes";
import {getMemories, postMemory, postMemoryDraft} from "../../../requests/memories/actions";
import {MemoryFormValues} from "../Form/MemoryForm.types";
import {getFriends} from "../../../requests/friends/actions";
import {User} from "../../Users/User/User.types";

const mapFormToPayload = (value: MemoryFormValues) => {
    return {
        ...value,
        friends: value.friends.map((friend) => friend.value),
        localization: {
            latitude: value.localization && value.localization.lat,
            longitude: value.localization && value.localization.lng,
        }
    }
}

export const AddMemoryContainer: FC = () => {
    const history = useHistory();
    const [friends, setFriends] = useState<[]>([]);

    const initialValues = {
        localization: {lat: 50.270908, lng: 19.039993},
        title: '',
        description: '',
        friends: [],
        image: ''
    }

    useEffect(() => {
        getFriends().then((response) => {
            setFriends(response.items.map((user: User) => ({
                label: `${user.firstname} ${user.lastname}`,
                value: user.username
            })));
        })
    }, [getMemories]);


    const handleDraftSave = (value: MemoryFormValues) => {
        postMemoryDraft(mapFormToPayload(value)).then((response) => {
            if (response.error)
                return
            history.push(MEMORIES_DRAFT);
        })
    }

    const handleSave = (value: MemoryFormValues) => {
        postMemory(mapFormToPayload(value)).then((response) => {
            if (response.error)
                return
            history.push(MEMORIES);
        })
    }


    return <MemoryForm initialValues={initialValues} onCancel={history.goBack} onDraftSave={handleDraftSave}
                       onSave={handleSave} friendsOptions={friends}/>
}