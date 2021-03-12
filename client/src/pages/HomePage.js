import React, { useContext, useEffect } from "react";
import LayoutComp from "../components/LayoutComp/LayoutComp";
import NavigationComp from "../components/NavigationComp/NavigationComp";
import { Link,useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import "./HomePage.css";

const HomePage = () => {
  const { handlePageChange, currentPage } = useContext(GlobalContext);

  let historia = useLocation();
console.log(historia, "HOMEPAGE USELOCATION")
console.log("current page", currentPage)


useEffect(()=>{
  if(historia.pathname === "/home"){
    handlePageChange("home");
  }
},[])
  return (
    <>
      <div className="mainpagewrap">
        <div className="circles">
          <div id="circle1" className="three-circles">
            <Link onClick={() => handlePageChange("about")} to="/about">
              <button
                
                id="btnid1"
                className="btn1"
              >
                <div className="me-circle">
                  <h1 className="front-names">About Me</h1>
                </div>
              </button>
            </Link>
          </div>

          <div id="circle2" className="three-circles">
            <Link  onClick={() => handlePageChange("portfolio")} to="/portfolio">
              <button
               
                id="btnid2"
                className="btn1"
              >
                <div className="me-circle">
                  <h1 className="front-names">Portfolio</h1>
                </div>
              </button>
            </Link>
          </div>

          <div id="circle3" className="three-circles">
            <Link onClick={() => handlePageChange("contact")} to="/contact">
              <button
                id="btnid3"
                className="btn1"
              >
                <div className="me-circle">
                  <h1 className="front-names">Contact</h1>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
