import React, {FC, useEffect, useState} from "react";
import {MemoryForm} from "../Form/MemoryForm";
import {useHistory, useParams} from "react-router";
import {LOGIN, MEMORIES, MEMORIES_DRAFT} from "../../../routing/routes";
import {getMemoriesDraft, postMemory, putMemoryDraft} from "../../../requests/memories/actions";
import {MemoryFormValues} from "../Form/MemoryForm.types";
import {getFriends} from "../../../requests/friends/actions";
import {User} from "../../Users/User/User.types";
import {SingleMemory} from "../List/SingleMemory/SingleMemory.types";

const mapFormToPayload = (value: MemoryFormValues) => {
    return {
        ...value,
        friends: value.friends.map((friend) => friend.value),
        localization: {
            latitude: value.localization && value.localization.lat.toString(),
            longitude: value.localization && value.localization.lng.toString(),
        }
    }
}

export const EditMemoryContainer: FC = () => {
    const history = useHistory();
    const params = useParams<{ id: string }>();
    const [friends, setFriends] = useState<{ label: string, value: string }[]>([]);

    const [initialValues, setInitialValues] = useState(null);

    useEffect(() => {
        getFriends().then((response) => {
            if (response.error)
                history.push(LOGIN);

            const localFriends: { label: string, value: string }[] = response.items.map((user: User) => ({
                label: `${user.firstname} ${user.lastname}`,
                value: user.username
            }))

            setFriends(localFriends);


            getMemoriesDraft().then((response) => {
                if (response.error)
                    history.push(LOGIN);

                const edited = response.items.find((item: SingleMemory) => item.id.toString() === params.id);
                console.log(friends, edited);
                setInitialValues({
                    ...edited,
                    localization: {
                        lat: edited.localization.latitude,
                        lng: edited.localization.longitude
                    },
                    friends: localFriends.filter(friend => edited.friends.includes(friend.value))
                });
            })
        })
    }, [getFriends]);


    const handleDraftSave = (value: MemoryFormValues) => {
        putMemoryDraft(mapFormToPayload(value), params.id).then((response) => {
            if (response.error)
                return
            history.push(MEMORIES_DRAFT);
        })
    };

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