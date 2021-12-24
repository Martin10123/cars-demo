import React from "react";
import FirstRouter from "./Routers/FirstRouter";
import { AppChangeContext } from "./usesContext/ChangeContext";
import { ContextModal } from "./usesContext/ModalContext";

function App() {
  return (
    <div className="App">
      <AppChangeContext>
        <ContextModal>
          <FirstRouter />
        </ContextModal>
      </AppChangeContext>
    </div>
  );
}

export default App;
