import { logotype, navLinks } from "../../constants/components/MainLayout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Popup from "../UI/Popup";
import { useState } from "react";
import burger_icon from "../../assets/images/svg/burger.svg";
import exit from "../../assets/images/svg/exit_x.svg";

const MainHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const popupDescription = {
    classes: {
      container: "mainLayout_header_mobile_burger_popup",
    },
    variant: {},
    styles: {},
  };
  return (
    <header className="mainLayout_header_container">
      <img
        loading="eager"
        onClick={() => navigate("/main")}
        src={logotype}
        className="mainLayout_header_logotype"
      />
      <nav className="mainLayout_header_navbar">
        {navLinks.map((item, index) => {
          return (
            <Link
              style={{
                borderBottom:
                  location.pathname === item.path ? "1px solid white" : "",
              }}
              key={index}
              to={item.path}
              className="mainLayout_header_link"
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="mainLayout_header_btnContainer">
        <button className="mainLayout_header_btnDemo">Заказать демо</button>
      </div>
      <div className="mainLayout_header_mobile_burger_container">
        {isShow ? (
          <img
            onClick={() => setIsShow(false)}
            className="mainLayout_header_mobile_burger_burger"
            src={exit}
          ></img>
        ) : (
          <img
            onClick={() => setIsShow(true)}
            className="mainLayout_header_mobile_burger_burger"
            src={burger_icon}
          ></img>
        )}
        <Popup {...popupDescription} isShow={isShow}>
          <nav className="mainLayout_header_mobile_burger_navbar">
            {navLinks.map((item, index) => {
              return (
                <Link
                  style={{
                    borderBottom:
                      location.pathname === item.path ? "1px solid white" : "",
                  }}
                  key={index}
                  to={item.path}
                  className="mainLayout_header_mobile_burger_link"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="mainLayout_header_mobile_burger_btnContainer">
            <button className="mainLayout_header_mobile_burger_btnDemo">
              Заказать демо
            </button>
          </div>
        </Popup>
      </div>
    </header>
  );
};

export default MainHeader;
