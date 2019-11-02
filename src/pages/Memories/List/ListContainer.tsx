import React, {FC} from "react";
import {List} from "./List";
import {SingleMemory} from "./SingleMemory/SingleMemory.types";


export const ListContainer: FC = () => {

    const memories: SingleMemory[] = [];

    return <List memories={memories} isDraft={false} handleEdit={() => {
    }}/>
}