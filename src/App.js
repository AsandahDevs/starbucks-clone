import { BrowserRouter, Routes, Route } from "react-router-dom";
import SHARED_LAYOUT from "./pages/SHARED_LAYOUT";
import Homepage from "./pages/Homepage";
import Coffees from "./pages/Coffees";
import Delivers from "./pages/Delivers";
import Rewards from "./pages/Rewards";
import ERROR_PAGE from "./pages/ERROR_PAGE";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="starbucks-clone/" element={<SHARED_LAYOUT />}>
          <Route index element={<Homepage />} />
          <Route path="coffees" element={<Coffees />} />
          <Route path="delivers" element={<Delivers />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="*" element={<ERROR_PAGE />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
