import styled from "styled-components";
import {ITaskCard} from "../../core/types";
import {connect} from "react-redux";
import {TaskDate} from "./TaskDate";
import {SubTasks} from "./SubTasks";


const TaskMain = styled.div`
    background-color: #FFFFFF;
    border: 0.5px solid #F5F5F5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .14), 0 2px 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: 13px;
    padding: 12px 30px;
`;

const TaskId = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  color: #757575;`

const TaskType = styled.div`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.5px;
    color: #757575;
  &::before {
    display: inline-block;
    content: '\\00B7';
    margin-right: 4px;
  }`;

const BadgeType = styled.div`
  border-radius: 3px;
  padding: 1px 8px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  color: #212121;
  background-color: ${props => props.color};
`;

const TaskTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TaskTitle = styled.div`
  color: #212121;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  margin-top: 5px;
  margin-bottom: 10px;`


const TaskUser = styled.div`
  display: grid;
  grid-template-columns: 250px 300px 170px
`;

const TaskCreator  = styled.div`

`;

const TaskCreatorOnce = styled.div`
  background-color: ${props => props.color};
  display: flex;
  flex-direction: row;
  line-height: 19px;
  padding: 3px;
  width: 100%;
  box-sizing: border-box;
  text-overflow: ellipsis;
  border-radius: 16px;
  font-size: 16px;
  letter-spacing: -0.3px;
`;

const TaskPerformers = styled.div`
  box-sizing: border-box;
  padding-left: 16px;
  width: 100%;`


const TaskStatus = styled.div`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #212121;
  white-space: nowrap;
`;

const TaskBadge = styled.div`
  width: max-content;
  font-size: 12px;
  line-height: 14px;
  color: #212121;
  border-radius: 3px;
;`


const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 130px;
`;

const TaskCreatorAvatar = styled.div`
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 12px;
  background-color: #407F8C;
  margin-right: 4px;
  color: #FFFFFF;
  font-size: 12px;
  letter-spacing: -0.5px;
`;
const TaskCreatorName = styled.div`
  max-width: 200px;
  padding-top: 3px;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TaskCreatorType = styled.div`
  white-space: nowrap;
  padding-top: 3px;
  padding-right: 3px;
  color: #757575;
    &:before {
      content: ' - ';
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }
`;
const getBadgeType = (type: string) => {
    switch (type) {
        case "Совещание отдела": return '#92C486';
        case "Встреча": return '#D1A89E';
        case "Конференция": return '#95CDD3';
    }
}

const TaskSubtasks = styled.div `
    padding-top: 10px;
    padding-left: 36px;
    padding-bottom: 5px;
`;

const TaskSubtasksContainer =styled.div`
  border-radius: 13px;
  margin-bottom: 8px;
  background-color: #E5EEF0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 14%), 0 2px 1px rgb(0 0 0 / 12%), 0 1px 3px rgb(0 0 0 / 20%);
`;

export const Task = (props: any) => {
    const { taskCard} = props;

        return taskCard.map((item: ITaskCard, index: number) => {
            const getColor = getBadgeType(item.type)
            const hasSubtasks = item.subTask && item.subTask.length > 0;

            return (
                <TaskSubtasksContainer>
                <TaskMain key={index}>
                    <TaskContainer>
                        <TaskId>ID {item.id}</TaskId>
                        <TaskType>Поручение</TaskType>
                        <TaskBadge>
                            <BadgeType color={getColor}>
                                {item.type}
                            </BadgeType>
                        </TaskBadge>
                    </TaskContainer>
                    <TaskTitleContainer>
                        <TaskTitle>{item.title}</TaskTitle>
                        <TaskDate dateStart={item.dateStart} dateEnd={item.dateEnd} />
                    </TaskTitleContainer>
                        <TaskUser>
                            <TaskCreator>
                                <TaskCreatorOnce color={'#EBF0F5'}>
                                    <TaskCreatorAvatar>{item.creator[0]}</TaskCreatorAvatar>
                                    <TaskCreatorName>{item.creator}</TaskCreatorName>
                                    <TaskCreatorType>Автор</TaskCreatorType>
                                </TaskCreatorOnce>
                            </TaskCreator>
                            <TaskPerformers>
                                <TaskCreatorOnce color={'#F2EDE2'}>
                                    <TaskCreatorAvatar>{item.performers[0]}</TaskCreatorAvatar>
                                    <TaskCreatorName>{item.performers}</TaskCreatorName>
                                    <TaskCreatorType>Исполнитель</TaskCreatorType>
                                </TaskCreatorOnce>
                            </TaskPerformers>
                            <TaskStatus> {item.statusTask}</TaskStatus>
                        </TaskUser>
                </TaskMain>
                    {hasSubtasks && (
                            <TaskSubtasks>
                                <SubTasks subtasks={item.subTask} />
                            </TaskSubtasks>
                        )
                    }
                </TaskSubtasksContainer>
            )
        })
}

const mapStateToProps = (state: { taskCard: any; }) => {
    return {
        taskCard: state.taskCard
    }
}

export default connect(mapStateToProps)(Task);
