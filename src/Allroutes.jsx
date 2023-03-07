import React from "react";
import {Routes, Route} from "react-router-dom";
import Buy from "./Pages/Buy/Buy";
import EntryPage from "./Pages/EntryPage/EntryPage";
import Portfolios from "./Pages/Portfolios/Portfolios";
import Admin from "./Pages/Admin/Admin";
import Navbar from "./Components/Navbar/Navbar";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryPage />} />

        <Route path='Portfolios/Buy/:id' element={<Buy />} />
        {/* Buy will be later modified to Buy/:id */}
        <Route path='/Portfolios' element={<><Navbar /><Portfolios /></>} />
        <Route path='/Admin' element={<><Navbar /><Admin /></>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
