import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Banner from "../components/UI/Banner";
import '../styles/pages/AboutUs/AboutUsFirstSection.css'
import '../styles/pages/AboutUs/AboutUsSecondSection.css'
import '../styles/pages/AboutUs/AboutUsThirdSection.css'
import '../styles/pages/AboutUs/AboutUsFifthSection.css'
import '../styles/pages/AboutUs/AboutUsSixthSection.css'
import '../styles/pages/AboutUs/AboutUsSeventhSection.css'
import { aboutUsS1Description, aboutUsS2Description, aboutUsS3Description, aboutUsS4Description, aboutUsS5Description, aboutUsS6Description, aboutUsS7Description } from "../constants/pages/AboutUs";
import CardList from "../components/UI/CardList";

type Props = {};

const AboutUs = (props: Props) => {
  return <MainLayout>
    <Banner {...aboutUsS1Description} />
    <Banner {...aboutUsS2Description} />
    <Banner {...aboutUsS3Description} />
    <Banner {...aboutUsS4Description} />
    <Banner {...aboutUsS5Description} />
    <Banner {...aboutUsS6Description} />
    <CardList {...aboutUsS7Description}/>
  </MainLayout>;
};

export default AboutUs;
