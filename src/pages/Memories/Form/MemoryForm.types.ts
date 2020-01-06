export interface MemoryFormProps {
    initialValues: MemoryFormValues | null,
    onSave: (values: MemoryFormValues) => void,
    onDraftSave: (values: MemoryFormValues) => void,
    onCancel: () => void,
    friendsOptions: { value: string, label: string }[]
}


export interface MemoryFormValues {
    image: string;
    title: string;
    description: string
    friends: { value: string, label: string }[]
    localization?: {
        lat: number;
        lng: number;
    }
}