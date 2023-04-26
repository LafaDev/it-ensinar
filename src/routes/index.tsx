import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentsProvider from "../services/context/StudentsProvider";
import Dashboard from "../pages/dashboard";
import Notfound from "../pages/notfound";

const RouterComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <StudentsProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </StudentsProvider>
    </BrowserRouter>
  )
}

export default RouterComponent;
