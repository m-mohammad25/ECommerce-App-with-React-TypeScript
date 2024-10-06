import { createRoot } from "react-dom/client";
//redux
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";

//axios
import "./services/axios_config.js";
//style
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "@routes/AppRouter";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* "loading={null}: dont show loading screen when fetching data from the storage" */}
      <AppRouter />
    </PersistGate>
  </Provider>
);
