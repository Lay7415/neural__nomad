import { followUs, navLinks } from "../../constants/components/MainLayout";
import { Link, useLocation } from "react-router-dom";

const MainFooter = () => {
  const location = useLocation();
  return (
    <footer className="mainLayout_footer_container">
      <div className="mainLayout_footer_navbar">
        <h3 className="mainLayout_footer_titles">Навигация</h3>
        {navLinks.map((item, index) => {
          if (location.pathname !== item.path) {
            return (
              <Link
                key={index}
                to={item.path}
                className="mainLayout_footer_Link"
              >
                {item.name}
              </Link>
            );
          }
        })}
      </div>
      <div className="mainLayout_footer_contacts">
        <h3 className="mainLayout_footer_titles">Контактная информация</h3>
        <p className="mainLayout_footer_contactsEmail">ieye7531@gmail.com</p>
        <p className="mainLayout_footer_contactsPhone">+996705889125</p>
        <p className="mainLayout_footer_contactsAdress">Улица Манаса А22</p>
      </div>
      <div className="mainLayout_footer_followUs">
        <h3 className="mainLayout_footer_titles">Подписывайтесь на нас</h3>
        {followUs.map((item, index) => {
          return (
            <div key={index} className="mainLayout_footer_followUsItem">
              <img
                className="mainLayout_footer_followUsItemIcon"
                src={item.icon}
                alt=""
              />
              <Link to={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default MainFooter;
