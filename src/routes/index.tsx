import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Notfound from "../pages/notfound";

const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent;
