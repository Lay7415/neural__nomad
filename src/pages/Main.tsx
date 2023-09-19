import { FC } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/UI/Banner";
import '../styles/pages/Main/MainFirstSection.css'
import '../styles/pages/Main/MainSecondSection.css'
import '../styles/pages/Main/MainThirdSection.css'
import '../styles/pages/Main/MainFourthSection.css'
import '../styles/pages/Main/MainFifthSection.css'
import { mainS1Description, mainS2Description, mainS3Description, mainS4Description, mainS5Description } from "../constants/pages/Main";
import BannerTextList from "../components/UI/BannerTextList";
import CardList from "../components/UI/CardList";
import VideoDemonstration from "../components/VideoDemonstration";

const Main: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Banner {...mainS1Description} />
      <Banner {...mainS2Description} />
      <CardList {...mainS3Description} />
      <BannerTextList {...mainS4Description} />
      <VideoDemonstration/>
      <Banner {...mainS5Description} />
    </MainLayout>
  );
};

export default Main;
