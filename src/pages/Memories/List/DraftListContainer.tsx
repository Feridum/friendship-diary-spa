import React, {FC} from "react";
import {List} from "./List";
import {SingleMemory} from "./SingleMemory/SingleMemory.types";


export const DraftListContainer: FC = () => {

    const memories: SingleMemory[] = [];
    const handleEdit = console.log;

    return <List memories={memories} isDraft={true} handleEdit={handleEdit}/>
}