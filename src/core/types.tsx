
export type TSubTask = {
    id: number,
    status: string
}

export interface ITaskCard {
    id: number;
    type: string; // вид задачи
    title: string; // название задачи
    creator: string; // автор
    performers: string; // исполнитель
    created: Date; // дата создания
    dateStart: Date; //дата начала
    dateEnd: Date; // дата завершения
    statusTask: string, // статус задач
    subTask?: Array<TSubTask>,  // количество подзадач
    closeType?: string, // как завершена задача
}
export type TTaskCard = Array<ITaskCard>