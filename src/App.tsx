import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Routing} from "./routing/Routing";


const App: React.FC = () => {
  return (
      <>
          <CssBaseline/>
          <Routing/>
      </>
  );
}

export default App;
