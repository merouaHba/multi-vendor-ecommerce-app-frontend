
import ReactDOM from "react-dom/client";
import AppRouter from "@/routes/AppRouter";
// redux
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// toaster
 import { ToastContainer } from "react-toastify";
// // axios
// import "@/services/api/axios.config.js";

// styles
import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
      <ToastContainer />
    </PersistGate>
  </Provider>
);

