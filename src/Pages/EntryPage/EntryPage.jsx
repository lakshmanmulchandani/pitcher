import React, {useEffect, useRef} from "react";
import "./EntryPage.css";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, login} from "../../actions/userActions.js";
import logo from "./NITrr.png";
import logox from "./logoX.png";
import logoy from "./Icell2.png";
function EntryPage() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const codeRef = useRef(null);
  const dispatch = useDispatch();

  const {isAuthenticated, error} = useSelector((state) => state.entryReducer);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/portfolios");
    }
    if (error) {
      alert(error);
    }

    dispatch(isLoggedIn());
  }, [isAuthenticated, error, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const code = codeRef.current.value;

    console.log(code, name);
    dispatch(login(code, name));
  };

  return (
    <div className='entry'>
      <div class='container'>
        <div class='card'>
          <form class='content' onSubmit={(e) => handleSubmit(e)}>
            <div className='logos'>
              <div>
                {" "}
                <img src={logoy} alt='' />
              </div>

              <div>
                {" "}
                <img src={logo} alt='' />
              </div>
            </div>

            <h3>Your Code</h3>
            <p>
              <input type='text' placeholder='Name' ref={nameRef} />
            </p>
            <p>
              <input type='text' placeholder='Code' ref={codeRef} />
            </p>
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntryPage;
