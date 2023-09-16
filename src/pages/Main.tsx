import { FC } from "react";
import "../styles/pages/Main/MainfirstSection.css";
import "../styles/pages/Main/MainSecondSection.css";
import "../styles/pages/Main/MainThirdSection.css";
import "../styles/pages/Main/MainFourthSection.css";
import "../styles/pages/Main/MainFifthSection.css";
import "../styles/pages/Main/MainSixthSection.css";
import "../styles/pages/Main/MainSeventhSection.css";

import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/UI/Banner";
import {
  mainS1Description,
  mainS2Description,
  mainS3Description,
  mainS4Description,
  mainS5Description,
  mainS6Description,
  mainS7Description,
} from "../constants/pages/Main";
import CardList from "../components/UI/CardList";
import BannerTextList from "../components/UI/BannerTextList";

const Main: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Banner {...mainS1Description}/>
      <Banner {...mainS2Description}/>
      <Banner {...mainS3Description}/>
      <CardList {...mainS4Description} />
      <Banner {...mainS5Description} />
      <BannerTextList {...mainS6Description }/>
      <BannerTextList {...mainS7Description}/>
    </MainLayout>
  );
};

export default Main;
