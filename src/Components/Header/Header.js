import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* <!-- Start Navigation --> */}
      <nav className="navbar navbar-default navbar-fixed white bootsnav on menu-center no-full">
        <div className="container-fluid">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-menu"
          >
            <i className="ti-align-left"></i>
          </button>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-center"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="dropdown">
                <a href="index.php" className="">
                  Home
                </a>
              </li>
              <li className="dropdown">
                <a href="listing.php">Listing</a>
              </li>

              <li className="dropdown">
                <a href="index.php" className="">
                  How we work
                </a>
              </li>

              <li>
                <a href="index.php">Why us?</a>
              </li>
            </ul>
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="no-pd"></li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
