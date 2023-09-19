import { navLinks } from "../../../constants/components/MainLayout";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <>
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
    </>
  );
};

export default MobileNavbar;
