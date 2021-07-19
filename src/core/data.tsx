import { TTaskCard} from "./types";


export const taskCard: TTaskCard = [
    {
        id: 12345,
        type: 'Совещание отдела',
        title: 'Оценка инвестиционной привлекательности проекта застройки',
        creator: 'Александр Александров',
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
        id: 12346,
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
        id: 12347,
        type: 'Конференция',
        title: 'Встреча с инвесторами',
        creator: 'Никита Никитин',
        performers: 'Зарембо-Годзяцкий',
        created: new Date(2021, 3, 1),
        dateStart: new Date(2021, 3, 1),
        dateEnd: new Date(2021, 3, 12),
        statusTask: 'Завершена',
        closeType: 'automatic'
    },
    {
        id: 12348,
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
        id: 12349,
        type: 'Совещание отдела',
        title: 'Обсуждение квартальных показателей',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Петр Петров',
        created: new Date(2021, 5, 1),
        dateStart: new Date(2021, 5, 2),
        dateEnd: new Date(2021, 6, 12),
        statusTask: 'В работе',
        closeType: 'manual'

    },
    {
        id: 12350,
        type: 'Конференция',
        title: 'Обсуждение',
        creator: 'Зарембо-Годзяцкий',
        performers: 'Иван Иванов',
        created: new Date(2021, 6, 1),
        dateStart: new Date(2021, 6, 2),
        dateEnd: new Date(2021, 7, 12),
        statusTask: 'Завершена',
    },
];


