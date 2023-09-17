import { FC } from "react";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/UI/Banner";

import "../styles/pages/Advantages/AdvantagesFirstSection.css";
import "../styles/pages/Advantages/AdvantagesSecondSection.css";
import "../styles/pages/Advantages/AdvantagesThirdSection.css";
import "../styles/pages/Advantages/AdvantagesFourthSection.css";
import "../styles/pages/Advantages/AdvantagesFifthSection.css";
import "../styles/pages/Advantages/AdvantagesSixthSection.css";

import { advantagesS1Description, advantagesS2Description, advantagesS3Description, advantagesS4Description, advantagesS5Description, advantagesS6Description } from "../constants/pages/Advantages";
import CardList from "../components/UI/CardList";
import BannerTextList from "../components/UI/BannerTextList";

const Advantages: FC = (): JSX.Element => {
  return (
    <MainLayout>
      <Banner {...advantagesS1Description} />
      <Banner {...advantagesS2Description} />
      <Banner {...advantagesS3Description} />
      <CardList {...advantagesS4Description} />
      <BannerTextList {...advantagesS5Description} />
      <Banner {...advantagesS6Description} />
    </MainLayout>
  );
};

export default Advantages;
