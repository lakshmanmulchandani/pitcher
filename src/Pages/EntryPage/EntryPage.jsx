import React from "react";
import {useNavigate} from "react-router-dom";
function EntryPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>EntryPage</h3>
      <h4 onClick={() => navigate("Portfolios")}>Portfolio</h4>
      <h4 onClick={() => navigate("Buy")}>Buy</h4>
      <h4 onClick={() => navigate("Admin")}>Admin</h4>
    </div>
  );
}

export default EntryPage;
