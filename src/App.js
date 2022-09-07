import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./screens/Investor";
import Services from "./screens/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
