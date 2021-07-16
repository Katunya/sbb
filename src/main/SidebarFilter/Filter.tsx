import React from "react"
import styled from "styled-components";
import TaskFilterSelect from './/TaskFilterSelect'
import { TaskGroupInput } from "./TaskGroupInput";
import { connect, ConnectedProps } from 'react-redux'

const TaskFilterGroup = styled.div`
`;

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
    { name: 'Совещание отдела', value: 'Совещание отдела' },
    { name: 'Встреча', value: 'Встреча' },
    { name: 'Конференция', value: 'Конференция' },
];

const closeType: Array<ITypeGroup>  = [
    { name: 'Вручную', value: 'manual' },
    { name: 'Автоматически', value: 'automatic' },
];

interface IFilter {
    field: string,
    status: string
}

const mapStateToProps = (state: IFilter) => {
    return {
        field: state.field,
        status: state.status,
    }
}


const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}


export const Filter = (props: Props) => {
    const {field, status} = props;

    return(
    <React.Fragment>
        <TaskFilterGroup> Группировка по:</TaskFilterGroup>
        <TaskGroupInput field={field}
                        status={status}
                        data={fields}
                        typeField={'groupField'}/>
        <TaskFilterGroup>По статусу </TaskFilterGroup>
        <TaskGroupInput field={field}
                        status={status}
                        data={processStatusData}
                        typeField={'groupProcess'}/>
        <TaskFilterGroup>Как завершена задача</TaskFilterGroup>
        <TaskFilterSelect
            type={'close'}
            data={closeType}
            placeholder="Любым образом"/>
        <TaskFilterGroup>Тип задачи</TaskFilterGroup>
        <TaskFilterSelect
            type={'typeTask'}
            data={typeTask}
            placeholder="Тип задачи"/>
    </React.Fragment>
    )
}

export default connector(Filter)
