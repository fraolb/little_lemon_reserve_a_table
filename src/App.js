import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./main";
import ReserveTable from "./reserveTable";
import AboutUs from "./aboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Main />} />
            <Route path="reserveTable" element={<ReserveTable />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contact" element={<Main />} />
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
