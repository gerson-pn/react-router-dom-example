import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/noPage";
import List from "./pages/list";
import People from "./pages/people";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/list" element={<List />} />
          <Route path="/people" element={<People />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

