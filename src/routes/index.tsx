import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "pages";
import DefaultPage from "components/DefaultPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<DefaultPage />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
