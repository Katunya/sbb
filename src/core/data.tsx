import { TTaskCard} from "./types";


export const taskCard: TTaskCard = [
    {
        id: 1,
        type: 'Совещание отдела',
        title: 'Оценка инвестиционной привлекательности проекта застройки',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created:  new Date(2021, 1, 1),
        dateStart: new Date(2021, 1, 1),
        dateEnd: new Date(2021, 2, 2),
        statusTask: 'В работе',
        subTask: [
            {
                id: 1213,
                status: 'В работе',
            },
            {
                id: 2232,
                status: 'Завершена',
            },
            {
                id: 2133,
                status: 'Новая',
            },
            {
                id: 4213,
                status: 'Новая',
            }
        ]
    },
    {
        id: 2,
        type: 'Встреча',
        title: 'Встреча с инвесторами',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 3, 1),
        dateStart: new Date(2021, 3, 1),
        dateEnd: new Date(2021, 3, 12),
        statusTask: 'Новая',
    },
    {
        id: 3,
        type: 'Конференция',
        title: 'Встреча с инвесторами',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 3, 1),
        dateStart: new Date(2021, 3, 1),
        dateEnd: new Date(2021, 3, 12),
        statusTask: 'Завершена',
        closeType: 'automatic'
    },
    {
        id: 4,
        type: 'Встреча',
        title: 'Встреча с консультантами',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 4, 1),
        dateStart: new Date(2021, 4, 1),
        dateEnd: new Date(2021, 5, 12),
        statusTask: 'В работе',
        closeType: 'manual'
    },
    {
        id: 5,
        type: 'Совещание отдела',
        title: 'Обсуждение квартальных показателей',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 5, 1),
        dateStart: new Date(2021, 5, 2),
        dateEnd: new Date(2021, 6, 12),
        statusTask: 'В работе',
        closeType: 'manual'

    },
    {
        id: 6,
        type: 'Конференция',
        title: 'Обсуждение',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 6, 1),
        dateStart: new Date(2021, 6, 2),
        dateEnd: new Date(2021, 7, 12),
        statusTask: 'Завершена',
    },
];


