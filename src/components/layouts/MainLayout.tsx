import { ReactNode } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import "../../styles/components/layouts/MainLayout.css";
import "../../styles/components/layouts/MainLayoutHeader.css";
import "../../styles/components/layouts/MainLayoutFooter.css";

type Props = {
  children: ReactNode | string;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="mainLayout_container">
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
