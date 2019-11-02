import React, {FC} from "react";
import {MemoryForm} from "../Form/MemoryForm";
import {useHistory} from "react-router";


export const AddMemoryContainer: FC = () => {
    const history = useHistory();

    const initialValues = {
        localization: {lat: 50.270908, lng: 19.039993},
        title: '',
        description: '',
        friends: [],
        image: ''
    }

    return <MemoryForm initialValues={initialValues} onCancel={history.goBack} onDraftSave={console.log}
                       onSave={console.log}/>
}