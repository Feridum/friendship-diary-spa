export interface SingleMemoryProps {
    handleEdit: (id: string) => void
    isEditable: boolean
    memory: SingleMemory,
}

export interface SingleMemory {
    id: string
    image: string
    title: string
    description: string
    friends: string[]
    localization: {
        latitude: number;
        longitude: number;
    }
}