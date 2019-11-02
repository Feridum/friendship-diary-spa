import React, {FC} from "react";
import {MainLayout} from "../../../components/layout/MainLayout/MainLayout";
import {SingleMemory} from "./SingleMemory/SingleMemory";
import {ListProps} from "./List.types";


export const List: FC<ListProps> = ({memories, isDraft, handleEdit}) => {

    return (
        <MainLayout>
            {memories.map(memory => (
                <SingleMemory memory={memory} isEditable={isDraft} handleEdit={handleEdit}/>
            ))}
        </MainLayout>
    )
}