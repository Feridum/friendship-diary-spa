import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Routing} from "./routing/Routing";


export const App: React.FC = () => {
    return (
        <>
            <CssBaseline/>
            <Routing/>
        </>
    );
}
