import { Route, Routes } from "react-router-dom";
import { ServiceRoutes } from "./routes/ServiceRoutes";

function App() {
  return <Routes>{<Route path="/*" element={<ServiceRoutes />} />}</Routes>;
}

export default App;
