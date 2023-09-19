import { useState } from "react";
import Popup from "../../components/UI/Popup";

const popupDescription = {
  classes: {
    container: "contacts_request_message",
  },
  variant: {},
  styles: {},
};

const ContactsGmailBanner = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const submitHandler = async (event: any) => {
    event.preventDefault();
    if (email === "") return;
    await fetch(
      "https://neural-42360-default-rtdb.firebaseio.com/gmails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      }
    );
    setEmail("");
    setIsShow(true);
  };
  return (
    <div className="contacts_s1_container">
      <h1 className="contacts_s1_title">Свяжитесь с нами</h1>
      <form onSubmit={submitHandler} className="contacts_s1_form">
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="example@gmail.com"
          className="contacts_s1_textfield"
          value={email}
        />
        <button type="submit" className="contacts_s1_button">
          Отправить
        </button>
      </form>
      <Popup isShow={isShow} {...popupDescription}>
        <div className="contacts_popup_container">
          <h1 className="contacts_popup_title">Ваша почта была отправлена!</h1>
          <button
            onClick={() => setIsShow(false)}
            className="contacts_popup_button"
          >
            Ок
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default ContactsGmailBanner;
