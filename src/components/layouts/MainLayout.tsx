import { ReactNode, useRef } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import "../../styles/components/layouts/MainLayout.css";
import "../../styles/components/layouts/MainLayoutHeader.css";
import "../../styles/components/layouts/MainLayoutFooter.css";
import { useScroll, useSpring, motion } from "framer-motion";

type Props = {
  children: ReactNode | string;
};

const MainLayout = ({ children }: Props) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({container:ref});
  return (
    <motion.div style={scrollYProgress} className="mainLayout_container">
      <MainHeader />
      <main>{children}</main>
      <MainFooter />
    </motion.div>
  );
};

export default MainLayout;
