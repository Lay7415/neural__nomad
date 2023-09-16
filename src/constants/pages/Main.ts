import Banner from '../../components/UI/Banner';
import main_s2_image from '../../assets/images/png/main_s2.png'
import main_s3_image from '../../assets/images/png/main_s3.png'
import main_s4_card1_image from '../../assets/images/main_s4_card1.avif'
import main_s4_card2_image from '../../assets/images/main_s4_card2.avif'
import main_s4_card3_image from '../../assets/images/main_s4_card3.avif'
import main_s4_card4_image from '../../assets/images/main_s4_card4.avif'
import main_s5_image from '../../assets/images/png/main_s5.png'
import main_s6_image from '../../assets/images/main_s6.avif'

export const mainS1Description = {
  classes: {
    container: "main_s1_container",
    contentContainer: "main_s1_contentContainer",
    title: "main_s1_title",
    text: "",
    image: "",
    video: "",
    button: "",
  },
  variant: {
    title: {
      visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
      hidden: { opacity: 0, y: -100 }
    }
  },
  styles: {},
  buttonDescription: {
    text: "",
    callbacks: {},
  },
  textDescription: {
    title: "Транспортный мониторинг нового поколения",
    text: "",
  },
  video: {
    src: "",
    config: {},
  },
  imageSrc: "",
};

export const mainS2Description = {
  classes: {
    container: "main_s2_container",
    contentContainer: "main_s2_contentContainer",
    title: "main_s2_title",
    text: "main_s2_text",
    image: "main_s2_image",
    video: "",
    button: "",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "",
    callbacks: {},
  },
  textDescription: {
    title: "Цели проекта",
    text: "Мы стремимся изменить облик общественного транспорта, делая его более современным, безопасным и удобным для всех пассажиров",
  },
  video: {
    src: '',
    config: {},
  },
  imageSrc: main_s2_image,
}

export const mainS3Description = {
  classes: {
    container: "main_s3_container",
    contentContainer: "main_s3_contentContainer",
    title: "main_s3_title",
    text: "main_s3_text",
    image: "main_s3_image",
    video: "",
    button: "",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "",
    callbacks: {},
  },
  textDescription: {
    title: "О системе",
    text: "Наш проект использует технологии компьютерного зрения и  анализа потока пасажиров в общественном транспорте",
  },
  video: {
    src: '',
    config: {},
  },
  imageSrc: main_s3_image,
}

export const mainS4Description = {
  classes: {
    container: "main_s4_container",
    cardContainer: 'main_s4_cardContainer',
    title: "main_s4_title",
    text: "main_s4_text",
    image: "",
    video: "",
    button: "main_s4_button",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "Начните сейчас",
    callbacks: {},
  },
  textDescription: {
    title: "Транспортный мониторинг нового поколения",
    text: "Наш проект использует технологии компьютерного зрения и  анализа потока пасажиров в общественном транспорте",
  },
  cards: [
    {
      classes: {
        container: "main_s4_card_container",
        title: "main_s4_card_title",
        text: "",
        image: "main_s4_card_image",
        video: "",
        button: "",
      },
      variant: {
        container: {
          visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          hidden: { opacity: 0 }
        },
      },
      styles: {},
      buttonDescription: {
        text: "",
        callbacks: {},
      },
      textDescription: {
        title: "Оптимизация логистики транспортных перевозок",
        text: "",
      },
      video: {
        src: '',
        config: {},
      },
      imageSrc: main_s4_card1_image,
    },
    {
      classes: {
        container: "main_s4_card_container",
        title: "main_s4_card_title",
        text: "main_s4_card_text",
        image: "main_s4_card_image",
        video: "",
        button: "",
      },
      variant: {
        container: {
          visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          hidden: { opacity: 0 }
        },
      },
      styles: {},
      buttonDescription: {
        text: "",
        callbacks: {},
      },
      textDescription: {
        title: "Повышение качества обслуживания пассажиров",
        text: "",
      },
      video: {
        src: '',
        config: {},
      },
      imageSrc: main_s4_card2_image,
    },
    {
      classes: {
        container: "main_s4_card_container",
        title: "main_s4_card_title",
        text: "main_s4_card_text",
        image: "main_s4_card_image",
        video: "",
        button: "",
      },
      variant: {
        container: {
          visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          hidden: { opacity: 0 }
        },
      },
      styles: {},
      buttonDescription: {
        text: "",
        callbacks: {},
      },
      textDescription: {
        title: "Получение точных данных о количестве пассажиров",
        text: "",
      },
      video: {
        src: '',
        config: {},
      },
      imageSrc: main_s4_card3_image,
    },
    {
      classes: {
        container: "main_s4_card_container",
        title: "main_s4_card_title",
        text: "main_s4_card_text",
        image: "main_s4_card_image",
        video: "",
        button: "",
      },
      variant: {
        container: {
          visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
          hidden: { opacity: 0 }
        },
      },
      styles: {},
      buttonDescription: {
        text: "",
        callbacks: {},
      },
      textDescription: {
        title: "Прозрачность и достоверность данных для транспортных компаний",
        text: "",
      },
      video: {
        src: '',
        config: {},
      },
      imageSrc: main_s4_card4_image,
    },
  ],
  ChildComponent: Banner
};

export const mainS5Description = {
  classes: {
    container: "main_s5_container",
    contentContainer: "main_s5_contentContainer",
    title: "main_s5_title",
    text: "main_s5_text",
    image: "main_s5_image",
    video: "",
    button: "",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "",
    callbacks: {},
  },
  textDescription: {
    title: "Возможности",
    text: "Система предоставляет актуальную аналитику по количеству пассажиров. Это позволяет транспортным компаниям оптимизировать логистику и повысить эффективность перевозок",
  },
  video: {
    src: '',
    config: {},
  },
  imageSrc: main_s5_image,
}

export const mainS6Description = {
  classes: {
    container: "main_s6_container",
    contentContainer: "main_s6_contentContainer",
    informationContainer: "main_s6_informationContainer",
    title: "main_s6_title",
    text: "main_s6_text",
    image: "main_s6_image",
    video: "",
    button: "",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "",
    callbacks: {},
  },
  textDescription: {
    title: "Работа системы",
    text: [
      "Наша система основана на передовых технологиях машинного обучения.",
      "У нас установлены датчики в транспортных средствах.",
      "Система автоматически считывает данные о пассажирах.",
      "Данные передаются в реальном времени.",
      "Это обеспечивает надежную информацию для принятия решений"
    ],
  },
  video: {
    src: '',
    config: {},
  },
  imageSrc: main_s6_image,
}

export const mainS7Description = {
  classes: {
    container: "main_s7_container",
    informationContainer: "main_s7_informationContainer",
    title: "main_s7_title",
    text: "main_s7_text",
    image: "",
    video: "",
    button: "main_s7_button",
  },
  variant: {
    container: {
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 }
    },
  },
  styles: {},
  buttonDescription: {
    text: "Связаться",
    callbacks: {},
  },
  textDescription: {
    title: "Обратная связь",
    text: [
      'По вопросам внедрения и сотрудничества обращайтесь по контактам:',
      'ieye7531@gmail.com',
      'тел. +7 999 777 66 55'
    ],
  },
  video: {
    src: "",
    config: {},
  },
  imageSrc: "",
};