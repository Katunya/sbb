import React from "react"
import styled from "styled-components";
import Accordion from "../components/Accordion";
import {TaskGroup} from "./TaskGroup";
import { TaskFilterProcess } from "./TaskFilterProcess";
import { SelectClose } from "./SelectClose";
import {SelectType} from "./SelectType";
import { TaskFilterDates } from "./TaskFilterDate";
import {TaskFilterText} from "./SelectSearch";


const TaskFilterGroup = styled.div`
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 10px;
`;

const Container =styled.div`
  display: grid;
  grid-template-rows: 100px 100px 100px;
`;

const ContainerFilter = styled.div``;


export interface ITypeGroup {
    name: string,
    value: string
}

const fields: Array<ITypeGroup> = [
    { name: 'Типу', value: 'type' },
    { name: 'Автору', value: 'creator' },
    { name: 'Статусу', value: 'statusTask' },
];

const processStatusData: Array<ITypeGroup> = [
    { name: 'Все', value: 'all' },
    { name: 'Новая', value: 'new' },
    { name: 'В работе', value: 'inWork' },
    { name: 'Завершена', value: 'completed' },
];

const typeTask: Array<ITypeGroup> = [
    { name: 'Все', value: 'Все' },
    { name: 'Совещание отдела', value: 'Совещание отдела' },
    { name: 'Встреча', value: 'Встреча' },
    { name: 'Конференция', value: 'Конференция' },
];

const closeType: Array<ITypeGroup>  = [
    { name: 'Любым образом', value: 'all' },
    { name: 'Вручную', value: 'manual' },
    { name: 'Автоматически', value: 'automatic' },
];

type TStatusTask = 'Все' | 'В работе' | 'Новая' | 'Завершена'
type TCLoseType = 'all' | 'manual' | 'automatic'


export const Filter = () => {
    return(
    <React.Fragment>
        <Accordion title="Группировка по">
            <TaskGroup data={fields}/>
        </Accordion>
        <Accordion title="Фильтр">
            <TaskFilterGroup>По статусу </TaskFilterGroup>
            <TaskFilterProcess data={processStatusData}/>
        </Accordion>
        <Container>
            <ContainerFilter>
                <TaskFilterGroup>Как завершена задача</TaskFilterGroup>
                <SelectClose data={closeType}/>
            </ContainerFilter>
            <ContainerFilter>
                <TaskFilterGroup>По сроку</TaskFilterGroup>
                <TaskFilterDates/>
            </ContainerFilter>
            <ContainerFilter>
                <TaskFilterGroup>Тип задачи</TaskFilterGroup>
                <SelectType data={typeTask}/>
            </ContainerFilter>
            <ContainerFilter>
                <TaskFilterText/>
            </ContainerFilter>
        </Container>
    </React.Fragment>
    )
}

export default Filter
