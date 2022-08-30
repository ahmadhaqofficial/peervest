import { BrowserRouter, Routes, Route } from "react-router-dom";
import Startup from "./screens/Startup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
