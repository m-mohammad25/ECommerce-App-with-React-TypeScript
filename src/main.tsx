import { createRoot } from "react-dom/client";
//redux
import { Provider } from "react-redux";
import store from "@store/index";

//style
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "@routes/AppRouter";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
