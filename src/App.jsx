import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
