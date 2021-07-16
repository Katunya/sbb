import styled from "styled-components";
import {connect} from "react-redux";
import React from "react";
import Task from "./Task";

const TaskList= styled.div`
  padding: 20px;
`;

const TaskListHeader = styled.div`
  display: flex;
  padding: 18px 0;
  line-height: 24px;
`;

const MainTitle= styled.span`
  font-weight: bold;
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
`;

const TaskItem = styled.div`
  padding-left: 20px;
`;

export interface IAllTask {
    taskCard : any
}

const AllTasks = (props : any  ) => {
    const { taskCard} = props

    return (
      <TaskListItems>
          <TaskItem>
      <TaskList>
          <TaskListHeader>
              <MainTitle></MainTitle>
              <TaskListNew>
                  Новых: {taskCard.length}
              </TaskListNew>
              <TaskListFailed>
                  Просроченных: {taskCard.length}
              </TaskListFailed>
          </TaskListHeader>
          <TaskListItems>
              <Task/>
          </TaskListItems>
      </TaskList></TaskItem>
      </TaskListItems>

  );
};

const mapStateToProps = (state: { taskCard: any; }) => {
    debugger
    return {
        taskCard: state.taskCard
    }
}

export default connect(mapStateToProps)( AllTasks);
