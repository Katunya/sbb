import styled from "styled-components";
import { useSelector} from "react-redux";
import React from "react";
import Task from "./Task";
import {getCountByKey} from "../../utils";

const TaskList= styled.div`
`;

const TaskListHeader = styled.div`
  display: grid;
  padding-top: 24px;
  padding-bottom: 18px;
  grid-template-columns: 500px 100px 200px;
`;

const MainTitle= styled.span`
`;

const TaskListNew= styled.span`
  color: #757575;
  font-size: 16px;
  flex-basis: 20%;
  white-space: nowrap;
`;

const TaskListFailed= styled.span`
  color: #757575;
  font-size: 16px;
  flex-basis: 20%;
  padding-right: 20px;
  text-align: right;
  white-space: nowrap;
`;


const TaskListItems= styled.div`
  margin-bottom: 20px;
  margin-left: 25px;
`;

const TaskItem = styled.div`
  padding-left: 15px;
`;

const AllTasks = ( ) => {

    const data = useSelector((state:  any) => state.taskCard);

    const  getNewTaskCount = (tasks: any[]) => {
        return getCountByKey(tasks, 'statusTask', 'Новая')
    }

    const getFailedTasksCount = (tasks: any[]) => {
        return tasks.reduce((count, task) => task.dateEnd < new Date() ? count + 1 : count, 0);
    }

    const newTaskCount = React.useMemo(() => getNewTaskCount(data), [data])

    return (
          <TaskItem>
              <TaskList>
                  <TaskListHeader>
                      <MainTitle><b>Поручения</b> (ручные)</MainTitle>
                      <TaskListNew>Новых: {newTaskCount}</TaskListNew>
                      <TaskListFailed>Просроченных: {getFailedTasksCount(data)}</TaskListFailed>
                  </TaskListHeader>
                  <TaskListItems>
                      <Task/>
                  </TaskListItems>
              </TaskList></TaskItem>
  );
};
export default  AllTasks;
