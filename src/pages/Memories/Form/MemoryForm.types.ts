export interface MemoryFormProps {
    initialValues: MemoryFormValues,
    onSave: (values: MemoryFormValues) => void,
    onDraftSave: (values: MemoryFormValues) => void,
    onCancel: () => void,
}


export interface MemoryFormValues {
    image: string;
    title: string;
    description: string
    friends: string[]
    localization?: {
        lat: number;
        lng: number;
    }
}