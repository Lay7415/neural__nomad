import contacts_s3_image from '../../assets/images/png/contacts_s3.png'

export const contactsS2Description = {
    classes: {
        container: "contacts_s2_container",
        contentContainer: "contacts_s2_contentContainer",
        title: "contacts_s2_title",
        text: "contacts_s2_text",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "Наша помощь",
        text: "По любым вопросам сотрудничества или работы системы Вы можете связаться с нами удобным для Вас способом. Мы открыты для общения и готовы оперативно ответить на все интересующие Вас вопросы.",
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: "",
};

export const contactsS3Description = {
    classes: {
        container: "contacts_s3_container",
        informationContainer: "contacts_s3_informationContainer",
        contentContainer: "contacts_s3_contentContainer",
        title: "contacts_s3_title",
        text: "contacts_s3_text",
        image: "contacts_s3_image",
        video: "",
        button: "",
        textTitle: "contacts_s3_textTitle",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "Вы можете также связаться с нами по этим данным",
        text: [
            {
                title: "- Наша почта:",
                text: "neuralNomad@gmail.com",
            },
            {
                title: "- Наш телефонный номер:",
                text: "++7 (999) 123-45-67 ",
            },
        ],
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: contacts_s3_image,
    imageCallback: {
        onClick() {
            console.log(window.location)
            window.location.href = 'https://maps.app.goo.gl/NtB2qRRHd3RcTNjX7'
        }
    }
};

export const contactsS4Description = {
    classes: {
        container: "contacts_s4_container",
        contentContainer: "",
        title: "",
        text: "contacts_s4_text",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "",
        text: "Мы также гарантируем, что после получения вашего запроса или сообщения, мы свяжемся с вами в кратчайшие сроки, чтобы предоставить вам необходимую информацию или решить вашу проблему.",
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: "",
};