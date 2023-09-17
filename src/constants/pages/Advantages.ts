import advantages_s2_image from '../../assets/images/avif/main_s4_card3.avif'
import Banner from '../../components/UI/Banner';
import advantages_s3_image from '../../assets/images/png/advantages_s3.png'
import advantages_s5_image from '../../assets/images/png/main_s5.png'
import advantages_s4_c1_image from '../../assets/images/avif/advantages_s4_c1.avif'
import advantages_s4_c2_image from '../../assets/images/avif/advantages_s4_c2.avif'
import advantages_s4_c3_image from '../../assets/images/avif/advantages_s4_c3.avif'


export const advantagesS1Description = {
    classes: {
        container: "advantages_s1_container",
        contentContainer: "advantages_s1_contentContainer",
        title: "advantages_s1_title",
        text: "advantages_s1_text",
        image: "",
        video: "",
        button: "",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "Преимущества нашей системы аналитики",
        text: "Наша система позволяет получить исчерпывающую информацию о посетителях и покупателях вашего магазина. Узнайте, как именно наша аналитика улучшит эффективность вашего бизнеса.",
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: "",
};

export const advantagesS2Description = {
    classes: {
        container: "advantages_s2_container",
        contentContainer: "advantages_s2_contentContainer",
        title: "advantages_s2_title",
        text: "advantages_s2_text",
        image: "advantages_s2_image",
        video: "",
        button: "advantages_s2_btnDemo",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "Запросить демо",
        callbacks: {},
    },
    textDescription: {
        title: "Точный подсчёт посетителей",
        text: "Забудьте о приблизительных оценках! Наша система подсчитывает абсолютно всех людей, заходящих в магазин. Вы будете знать точное количество посетителей за любой период",
    },
    video: {
        src: '',
        config: {},
    },
    imageSrc: advantages_s2_image,
}

export const advantagesS3Description = {
    classes: {
        container: "advantages_s3_container",
        contentContainer: "advantages_s3_contentContainer",
        title: "advantages_s3_title",
        text: "advantages_s3_text",
        image: "advantages_s3_image",
        video: "",
        button: "advantages_s3_btnDemo",
    },
    variant: {
        container: {
            visible: { opacity: 1, transition: { duration: 0.5 } },
            hidden: { opacity: 0 }
        },
    },
    styles: {},
    buttonDescription: {
        text: "Запросить демо",
        callbacks: {},
    },
    textDescription: {
        title: "Анализ целевой аудитории",
        text: "Получите данные о половозрастном составе аудитории и выявите свои основные целевые группы. Это позволит корректировать ассортимент и маркетинг.",
    },
    video: {
        src: '',
        config: {},
    },
    imageSrc: advantages_s3_image,
}

export const advantagesS4Description = {
    classes: {
        container: "advantages_s4_container",
        cardContainer: 'advantages_s4_cardContainer',
        title: "advantages_s4_title",
        image: "",
        video: "",
        button: "advantages_s4_button",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "Начните сейчас",
        callbacks: {},
    },
    textDescription: {
        title: "Транспортный мониторинг нового поколения",
        text: "",
    },
    cards: [
        {
            classes: {
                container: "advantages_s4_card_container",
                title: "advantages_s4_card_title",
                text: "advantages_s4_card_text",
                image: "advantages_s4_card_image",
                video: "",
                button: "",
            },
            variant: {},
            styles: {},
            buttonDescription: {
                text: "",
                callbacks: {},
            },
            textDescription: {
                title: "Отслеживание реальной конверсии",
                text: "Система рассчитает соотношение посетителей к покупателям и покажет реальную конверсию. Вы сможете оценить эффективность бизнес-процессов",
            },
            video: {
                src: '',
                config: {},
            },
            imageSrc: advantages_s4_c1_image,
        },
        {
            classes: {
                container: "advantages_s4_card_container",
                title: "advantages_s4_card_title",
                text: "advantages_s4_card_text",
                image: "advantages_s4_card_image",
                video: "",
                button: "",
            },
            variant: {},
            styles: {},
            buttonDescription: {
                text: "",
                callbacks: {},
            },
            textDescription: {
                title: "Сравнительная аналитика по периодам",
                text: "Сравнивайте посещаемость и конверсию по дням, часам, месяцам - и выявляйте наиболее удачные или проблемные периоды для вашего магазина.",
            },
            video: {
                src: '',
                config: {},
            },
            imageSrc: advantages_s4_c2_image,
        },
    ],
    ChildComponent: Banner
};

export const advantagesS5Description = {
    classes: {
        container: "advantages_s5_container",
        informationContainer: "advantages_s5_informationContainer",
        contentContainer: 'advantages_s5_contentContainer',
        title: "advantages_s5_title",
        text: "advantages_s5_text",
        image: "advantages_s5_image",
        video: "",
        button: "",
        textTitle: 'advantages_s5_textTitle'
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
        title: "Наши возможности",
        text: [
            {
                title: "Возможности интеграции",
                text: "Данные о посетителях можно комбинировать с другими системами магазина для получения наиболее полной картины"
            },
            {
                title: "Изучение лояльности",
                text: "Отслеживайте повторные визиты и анализируйте поведение лояльных покупателей. Это ключ к удержанию аудитории"
            },
            {
                title: "Улучшение принятия решений",
                text: "На основе точных данных о посетителях вы сможете принимать взвешенные управленческие решения"
            },
        ],
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: advantages_s5_image,
};

export const advantagesS6Description = {
    classes: {
        container: "advantages_s6_container",
        contentContainer: "advantages_s6_contentContainer",
        title: "advantages_s6_title",
        text: "advantages_s6_text",
        image: "",
        video: "",
        button: "advantages_s6_button",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "Запросить демо",
        callbacks: {},
    },
    textDescription: {
        title: "Наши специалисты проконсультируют вас по всем вопросам",
        text: "Оцените преимущества системы сами",
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: "",
};