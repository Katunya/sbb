import React, { useMemo } from 'react';

import {getWeeksCount} from "../../utils";
import styled from "styled-components";

const TaskDateContainer = styled.div` 
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    letter-spacing: -0.03em;
    color: #757575;
    display: flex;
    flex-direction: row;
`;

const TaskDateStart = styled.div`
    white-space: nowrap;
`;

const TaskDateFinish = styled.div`
    white-space: nowrap;
   &::before {
     content: '-';
     display: inline-block;
     margin-left: 4px;
     margin-right: 4px;
   }`;

const TaskDateWeeks = styled.div`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.5px;
    background-color: #F7AF1F;
    border-radius: 4px;
    padding: 1px;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    color: #FFFFFF;
    text-align: center;
    margin-left: 2px;
`;

// @ts-ignore
export const  TaskDate = ({ dateStart, dateEnd, localeOptions = {} }) => {
    const defaultOptions = {
        month: 'short',
        day: 'numeric',
    };

    const deadlineFailed = dateEnd < new Date();
    const weeksCount = useMemo(() => getWeeksCount(dateStart, dateEnd), [dateEnd, dateStart])


    return (
        <TaskDateContainer>
            <TaskDateStart>
                {dateStart.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </TaskDateStart>
            <TaskDateFinish color={deadlineFailed ? '#DB2C2C' : '#757575'}>
                {dateEnd.toLocaleString("ru", { ...defaultOptions, ...localeOptions })}
            </TaskDateFinish>
            <TaskDateWeeks color={deadlineFailed ? '#EF877C' : '#FFFFFF'}>
                {weeksCount}
            </TaskDateWeeks>
        </TaskDateContainer>
    )
}
