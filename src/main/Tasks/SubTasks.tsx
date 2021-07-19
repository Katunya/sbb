import React, { useMemo } from 'react';
import styled from 'styled-components';
import { getCountByKey } from '../../utils';
import { ReactComponent as List } from './icons/list.svg';
import { ReactComponent as Check } from './icons/check.svg';
import { ReactComponent as ClockFull } from './icons/clockFull.svg';
import { ReactComponent as ClockHalf } from './icons/clockHalf.svg';


const SubTasksContainer = styled.div `
    display: flex;
    flex-direction: row;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 24px;
`;

const SubTasksLabel = styled.div `
    color: #757575;
    padding-right: 8px;
`;

const SubTasksNew = styled.div `
    font-size: 16px;
    padding-right: 8px;
`

const SubTasksInProgress = styled.div `
    font-size: 16px;
    padding-right: 8px;
`

const SubTasksClosed = styled.div `
    font-size: 16px;
`

const SubTasksIcon = styled.div `

    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    vertical-align: middle;
`;

const SubTasksIconTypeList  = styled.div `
  &&:before {
    background-image: url("./icons/list.svg");
  }
`

const SubTasksIconTypeNew  = styled.div `
  &&:before {
    background-image: url("./icons/clockFull.svg");
  }
`

const SubTasksIconTypeInProgress  = styled.div `
  &&:before {
    background-image: url("./icons/clockHalf.svg");
  }
`

const SubTasksIconTypeClosed  = styled.div `
  &&:before {
    background-image: url("./icons/check.svg");
  }
`

export const  SubTasks = (props: any) => {

    const {subtasks} = props;

    const newSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status', 'Новая'),
        [subtasks]
    );
    const inProgressSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status', 'В работе'),
        [subtasks]
    );
    const closedSubtasksCount = useMemo(
        () => getCountByKey(subtasks, 'status', 'Завершена'),
        [subtasks]
    );

    return (
        <SubTasksContainer>
            <SubTasksLabel>
                <SubTasksIcon><List/></SubTasksIcon>
                Задачи:
            </SubTasksLabel>
    {newSubtasksCount && (<SubTasksNew title="Новая"><SubTasksIcon><Check/></SubTasksIcon>{newSubtasksCount}</SubTasksNew>)}
    {inProgressSubtasksCount && (
        <SubTasksInProgress title="В работе">
            <SubTasksIcon><ClockHalf/></SubTasksIcon>
            {inProgressSubtasksCount}
        </SubTasksInProgress>)}
    {closedSubtasksCount && (
            <SubTasksClosed title="Завершена">
                <SubTasksIcon><ClockFull/></SubTasksIcon>
                {closedSubtasksCount}
            </SubTasksClosed>
        )
    }
        </SubTasksContainer>

    )
}
