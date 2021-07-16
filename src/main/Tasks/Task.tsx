import styled from "styled-components";
import {ITaskCard} from "../../core/types";
import {connect} from "react-redux";
import {compose} from "redux";

function getBadgeType(type: any) {
    switch (type) {
        case "Совещание отдела": return 'discuss'
        case "Встреча": return 'meeting'
        case "Конференция": return 'conf'
    }
}


const TaskMain = styled.div`
    background-color: #FFFFFF;
    border: 0.5px solid #F5F5F5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .14), 0 2px 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .2);
    border-radius: 13px;
    margin: 20px;
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
    color: #757575;`

const BadgeType = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  color: #757575;
  margin-right: 4px;
  &::before {
    content: '';
    margin-left: 4px;
    margin-right: 4px;
  }
`;

const TaskTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TaskTitle = styled.div`
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.03em;
  margin-top: 5px;
  font-weight: normal;`

const TaskData = styled.div`
`;

const TaskInfo =  styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


const TaskUser = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 80%;
    flex-grow: 10;
`;

const TaskCreator  = styled.div`
    padding-right: 20px;
    box-sizing: border-box;
    width: 100%;
`;

const TaskPerformers = styled.div`
  box-sizing: border-box;
  padding-left: 16px;
  width: 100%;`


const TaskStatus = styled.div`
  line-height: 30px;
  font-size: 15px;
  padding: 0 16px;
  white-space: nowrap;
  text-align: right;
`;

const TaskBadge = styled.div`
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.5px;
  color: #212121;
  background: #EBF0F5;
  border-radius: 3px;
  padding: 1px 8px;`

const SubTasks = styled.div`
`;
const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 100px 100px;
`;

export const Task = (props: any) => {
    const { taskCard} = props;

    debugger
        return taskCard.map((item: ITaskCard, index: number) => {
            return (
                <TaskMain key={item.id}>
                    <TaskContainer>
                        <TaskId>id: {item.id}</TaskId>
                        <TaskType>Поручение</TaskType>
                        <TaskBadge>
                            <BadgeType>
                                {item.type}
                            </BadgeType>
                        </TaskBadge>
                    </TaskContainer>
                    <TaskTitleContainer>
                        <TaskTitle>{item.title}</TaskTitle>
                        <TaskData></TaskData>
                    </TaskTitleContainer>
                    <TaskInfo>
                        <TaskUser>
                            <TaskCreator>{item.creator}</TaskCreator>
                            <TaskPerformers>{item.performers}</TaskPerformers>
                            <TaskStatus> {item.statusTask}</TaskStatus>
                        </TaskUser>
                    </TaskInfo>
                </TaskMain>
            )
        })
}

const mapStateToProps = (state: { taskCard: any; }) => {
    return {
        taskCard: state.taskCard
    }
}

export default connect(mapStateToProps)(Task);
