import React, {FC, useEffect, useState} from "react";
import {List} from "./List";
import {SingleMemory} from "./SingleMemory/SingleMemory.types";
import {getMemories, getMemoriesDraft} from "../../../requests/memories/actions";
import {LOGIN} from "../../../routing/routes";
import {useHistory} from "react-router";


export const DraftListContainer: FC = () => {
    const history = useHistory();
    const [memories, setMemories] = useState<SingleMemory[]>([]);

    useEffect(() => {
        getMemoriesDraft().then((response) => {
            if (response.error)
                history.push(LOGIN);
            setMemories(response.items);
        })
    }, [getMemories]);

    const handleEdit = (id: string) => history.push(`/memory/${id}`);

    return <List memories={memories} isDraft={true} handleEdit={handleEdit}/>
}