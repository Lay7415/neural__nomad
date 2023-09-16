import { logotype, navLinks } from "../../constants/components/MainLayout";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MainHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
        <button className="mainLayout_header_btnDemo">Демо</button>
      </div>
    </header>
  );
};

export default MainHeader;
