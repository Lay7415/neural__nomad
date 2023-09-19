import Banner from '../../components/UI/Banner';
import main_s2_image from '../../assets/images/avif/main_s2.avif'
import main_s3_c1_image from '../../assets/images/avif/main_s3_c1.avif'
import main_s3_c2_image from '../../assets/images/avif/main_s3_c2.avif'
import main_s3_c3_image from '../../assets/images/avif/main_s3_c3.avif'
import main_s4_image from '../../assets/images/avif/main_s4.avif'

export const mainS1Description = {
    classes: {
        container: "main_s1_container",
        contentContainer: "main_s1_contentContainer",
        title: "main_s1_title",
        text: "main_s1_text",
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
        title: "Система аналитики посетителей для ритейла",
        text: "Хотите знать, сколько людей приходит в ваш магазин и насколько эффективно вы их обслуживаете? Наша система предоставит подробную аналитику по каждому посетителю.",
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
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "Получайте детальную информацию о ваших покупателях",
        text: "Управлять магазином, не имея информации о реальной посещаемости и конверсии - все равно, что лететь вслепую. Вы не знаете, сколько людей к вам заходит, кто они, сколько в итоге покупают. А без этих данных невозможно принимать правильные бизнес-решения.",
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
        cardContainer: 'main_s3_cardContainer',
        title: "main_s3_title",
        image: "",
        video: "",
        button: "main_s3_button",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "",
        callbacks: {},
    },
    textDescription: {
        title: "Преимущества",
        text: "",
    },
    cards: [
        {
            classes: {
                container: "main_s3_card_container",
                title: "main_s3_card_title",
                text: "main_s3_card_text",
                image: "main_s3_card_image",
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
                title: "Отслеживание конверсии",
                text: "Отслеживаем, сколько посетителей в итоге совершают покупку, чтобы вы могли оценивать эффективность бизнеса и принимать обоснованные решения.",
            },
            video: {
                src: '',
                config: {},
            },
            imageSrc: main_s3_c1_image,
        },
        {
            classes: {
                container: "main_s3_card_container",
                title: "main_s3_card_title",
                text: "main_s3_card_text",
                image: "main_s3_card_image",
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
                title: "Сравнение показателей по дням и часам",
                text: "Анализируем динамику посещаемости и конверсии по дням недели и часам работы. Это позволит оптимизировать график и повысить продажи.",
            },
            video: {
                src: '',
                config: {},
            },
            imageSrc: main_s3_c2_image,
        },
        {
            classes: {
                container: "main_s3_card_container",
                title: "main_s3_card_title",
                text: "main_s3_card_text",
                image: "main_s3_card_image",
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
                title: "Автоматические отчёты",
                text: "Формируем подробные аналитические отчёты, которые можно использовать для презентаций и обоснования бизнес-решений.",
            },
            video: {
                src: '',
                config: {},
            },
            imageSrc: main_s3_c3_image,
        },
    ],
    ChildComponent: Banner
};

export const mainS4Description = {
    classes: {
        container: "main_s4_container",
        informationContainer: "main_s4_informationContainer",
        contentContainer: 'main_s4_contentContainer',
        title: "main_s4_title",
        text: "main_s4_text",
        image: "main_s4_image",
        video: "",
        button: "",
        textTitle: 'main_s4_textTitle'
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
        title: "Как именно наша система анализирует вашу аудиторию",
        text: [
            {
                title: "Изображение и камеры.",
                text: "Наши камеры фиксируют каждого входящего и выходящего из магазина человека."
            },
            {
                title: "Изображение магазина.",
                text: "Отслеживаем перемещения по торговому залу и время в каждой зоне."
            },
            {
                title: "Изображение графиков.",
                text: "Формируем детальную аналитику - пол, возраст, конверсия, динамика посещенийю."
            },
            {
                title: "Изображение сегментов.",
                text: "Выделяем целевые группы и анализируем их поведение."
            },
        ],
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: main_s4_image,
};

export const mainS5Description = {
    classes: {
        container: "main_s5_container",
        contentContainer: "main_s5_contentContainer",
        title: "main_s5_title",
        text: "main_s5_text",
        image: "",
        video: "",
        button: "main_s5_button",
    },
    variant: {},
    styles: {},
    buttonDescription: {
        text: "Запросить демо",
        callbacks: {},
    },
    textDescription: {
        title: "Узнайте больше о возможностях нашего сервиса.",
        text: "Ваш магазин в ваших руках!",
    },
    video: {
        src: "",
        config: {},
    },
    imageSrc: "",
};