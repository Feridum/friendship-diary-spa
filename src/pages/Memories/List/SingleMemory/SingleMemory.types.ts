export interface SingleMemoryProps {
    handleEdit: (id: string) => void
    isEditable: boolean
    memory: SingleMemory,
}

export interface SingleMemory {
    uuid: string
    image: string
    title: string
    description: string
    friends: string[]
    localization: {
        lat: string;
        lng: string;
    }

}