import React, {FC, useEffect, useState} from "react";
import {List} from "./List";
import {SingleMemory} from "./SingleMemory/SingleMemory.types";
import {getMemories} from "../../../requests/memories/actions";
import {useHistory} from "react-router";
import {LOGIN} from "../../../routing/routes";


export const ListContainer: FC = () => {
    const history = useHistory();
    const [memories, setMemories] = useState<SingleMemory[]>([]);

    useEffect(() => {
        getMemories().then((response) => {
            console.log(response)
            if (response.error)
                history.push(LOGIN)
            setMemories(response.items);

        }).catch(e => {
            console.log(e)
        })
    }, [getMemories]);


    return <List memories={memories} isDraft={false} handleEdit={() => {
    }}/>
}