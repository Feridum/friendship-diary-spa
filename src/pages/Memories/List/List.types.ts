import {SingleMemory} from "./SingleMemory/SingleMemory.types";

export interface ListProps {
    memories: SingleMemory[];
    isDraft: boolean,
    handleEdit: (id: string) => void
}