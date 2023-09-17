import youtube_icon from "../../assets/images/svg/youtube_icon.svg";
import instagram_icon from "../../assets/images/svg/instagram_icon.svg";
import facebook_icon from "../../assets/images/svg/facebook_icon.svg";
import burger_icon from '../../assets/images/svg/burger_icon.svg'
import logo from "../../assets/images/png/logotype.png"

export const logotype = logo

export const navLinks = [
    {
        path: "/main",
        name: "Главная",
    },
    {
        path: "/about_us",
        name: "О нас",
    },
    {
        path: "/advantages",
        name: "Примущества",
    },
];

export const followUs = [
    {
        path: "/",
        icon: youtube_icon,
        name: "Youtube",
    },
    {
        path: "/about_us",
        icon: instagram_icon,
        name: "Instagram",
    },
    {
        path: "/cost",
        icon: facebook_icon,
        name: "Facebook",
    },
];

export const popupDescription = {
    classes: {
        container: 'Mainlayout_popup_container',
        button: 'Mainlayout_popup_button',
        icon: 'Mainlayout_popup_icon',
        popup: 'Mainlayout_popup_popup',
    },
    variant: {
        header: {}
    },
    styles: '',
    buttonDescription: {
        text: '',
        callbacks: {},
        imgSrc: burger_icon,
    },
}
