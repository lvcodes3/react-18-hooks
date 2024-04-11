import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './Home';
import UseState from "./UseState/UseState";
import UseEffect from "./UseEffect/UseEffect";
import UseContext from "./UseContext/UseContext";
import UseRef from "./UseRef/UseRef";
import UseMemo from "./UseMemo/UseMemo";
import UseCallback from "./UseCallback/UseCallback";
import UseReducer from "./UseReducer/UseReducer";

function App() {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useReducer" element={<UseReducer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
