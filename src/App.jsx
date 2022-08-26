import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";
import OpenClient from "./pages/OpenClient";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Clients router, Home, NewClient, EditClient */}
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit:id" element={<EditClient />} />
          <Route path=":id" element={<OpenClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
