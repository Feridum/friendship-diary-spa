export interface ProfileFormProps {
    initialValues: ProfileFormValues,
    onSave: (values: ProfileFormValues) => void;
}

export interface ProfileFormValues {
    firstname: string
    lastname: string
}