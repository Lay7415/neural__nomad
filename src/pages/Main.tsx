import { FC } from "react";
import MainLayout from "../components/layouts/MainLayout";

const Main: FC = (): JSX.Element => {
  return <MainLayout>
    <div style={{
      width: '100vw',
      height: "100vh"
    }}></div>
  </MainLayout>;
};

export default Main;
