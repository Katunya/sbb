import {taskCard} from "../core/data";
import {byField} from "../utils/helpers";

const initialState = {
    field: 'statusTask',
    status: 'all',
    closeType: '',
    taskCard: taskCard,
    typeTask: '',
};

// @ts-ignore
const appReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'FIELD_REQUEST' : {
            return {
                ...state,
                taskCard: state.taskCard.sort(byField(payload)),
                field: payload,
            }
        }
        case 'PROCESS_STATUS_REQUEST' : {
            return {
                ...state,
                taskCard: state.taskCard.sort(byField(payload)),
                status: payload,
            }
        }
        case 'CLOSE_REQUEST': {
            return {
                ...state,
                taskCard: taskCard.filter(item => item.closeType === payload),
                closeType: payload
            }
        }
        case 'TYPE_TASK_REQUEST': {
            return {
                ...state,
                taskCard: taskCard.filter(item => item.type === payload),
                typeTask: payload
            }
        }
        default:
            return state;
    }}


export default appReducers
