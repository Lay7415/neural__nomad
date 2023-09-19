import { FC } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ContactsGmailBanner from "../constants/components/ContactsGmailBanner";

import '../styles/pages/Contacts/ContactsFirstSection.css'
import '../styles/pages/Contacts/ContactsSecondSection.css'
import '../styles/pages/Contacts/ContactsThirdSection.css'
import '../styles/pages/Contacts/ContactsFourthSection.css'

import Banner from "../components/UI/Banner";
import { contactsS2Description, contactsS3Description, contactsS4Description } from "../constants/pages/Contacts";
import BannerTextList from "../components/UI/BannerTextList";

const Contacts: FC = (): JSX.Element => {
  return <MainLayout>
    <ContactsGmailBanner />
    <Banner {...contactsS2Description} />
    <BannerTextList {...contactsS3Description}/>
    <Banner {...contactsS4Description} />
  </MainLayout>;
};

export default Contacts;