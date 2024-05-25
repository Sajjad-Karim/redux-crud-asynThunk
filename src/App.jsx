import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { ReduxProvider } from "./Store/Provider";
function App() {
  return (
    <>
      <ReduxProvider>
        <RouterProvider router={routes} />
      </ReduxProvider>
    </>
  );
}

export default App;
