import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppContextProvider from "./context/AppContext";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <AppContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppRouter />
    </AppContextProvider>
  );
}

export default App;
