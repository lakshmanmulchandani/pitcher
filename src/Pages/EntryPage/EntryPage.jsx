import React from "react";
import "./EntryPage.css"
import { Link, useNavigate } from "react-router-dom";


function EntryPage() {
  const navigate = useNavigate();
  return (
    <div className="entry">
          <div class="container">
        <div class="card">
            <div class="content">
                <h2>01</h2>
                <h3>Your Code</h3>
                
                <p><input type="text" placeholder="Name" /></p>
                <p><input type="text" placeholder="Code" /></p>
                <Link to="#">submit</Link>
            </div>
        </div>
    </div>
    
    </div>
  );
}

export default EntryPage;
