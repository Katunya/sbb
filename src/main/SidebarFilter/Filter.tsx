import React from "react"
import styled from "styled-components";
import TaskFilterSelect from './/TaskFilterSelect'
import {connect} from "react-redux";
import {fieldRequest, processStatusRequest} from "../../actions";
import { TaskGroupInput } from "./TaskGroupInput";

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

export const Filter = (props: any) => {
    const {field, processStatus} = props;

    return(
    <React.Fragment>
        <TaskFilterGroup> Группировка по:</TaskFilterGroup>
        <TaskGroupInput field={field}
                        processStatus={processStatus}
                        data={fields}
                        typeField={'groupField'}/>
        <TaskFilterGroup>По статусу </TaskFilterGroup>
        <TaskGroupInput field={field}
                        processStatus={processStatus}
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
const mapStateToProps = (state: { field: string, processStatus: string }) => {
    return {
        field: state.field,
        processStatus: state.processStatus,
    }
}

export default connect(mapStateToProps, fieldRequest, processStatusRequest)(Filter);
