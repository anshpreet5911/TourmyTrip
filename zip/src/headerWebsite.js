import React from "react";

const HeaderWebsite = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="navbar-left">
            <a href="">
              <img
                src="images/Frame 2.png"
                alt="logo-img"
                style={{ height: "60px", width: "140px" }}
              />
            </a>
            <ul className="tabs">
              <li>More Travel</li>
              <li>Deals</li>
            </ul>
          </div>

          <div className="navbar-right">
            <div className="call-us">
              <span className="book-now">Book Now - Call Us 24/7</span>
              <span className="number">12345689</span>
            </div>

            <div className="currency">
              <select id="lang-select">
                <optgroup label="Languages">
                  <option value="en">EN</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="ar">Arabic</option>
                </optgroup>
                <optgroup label="Currencies">
                  <option value="usd">USD - United States Dollar</option>
                  <option value="eur">EUR - Euro</option>
                  <option value="gbp">GBP - British Pound</option>
                  <option value="jpy">JPY - Japanese Yen</option>
                  <option value="aud">AUD - Australian Dollar</option>
                  <option value="cad">CAD - Canadian Dollar</option>
                </optgroup>
              </select>
            </div>

            {/* <div className="help">Help</div>
            <div className="Sign-up">Sign Up/Join</div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderWebsite;
