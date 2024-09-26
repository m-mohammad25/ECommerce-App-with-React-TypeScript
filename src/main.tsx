import { createRoot } from "react-dom/client";

//style
import "bootstrap/dist/css/bootstrap.min.css";

import AppRouter from "@routes/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);
