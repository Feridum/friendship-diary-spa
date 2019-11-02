import React, {FC} from "react";
import {ProfileForm} from "./ProfileForm";


export const ProfileFormContainer: FC = () => {

    const onSave = console.log;

    const initialValues = {
        firstname: 'aaa',
        lastname: 'foo'
    }

    return <ProfileForm initialValues={initialValues} onSave={onSave}/>
}