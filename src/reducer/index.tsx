import {taskCard} from "../core/data";
import {byField} from "../utils/helpers";

const initialState = {
    field: 'statusTask',
    processStatus: 'all',
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
        case 'FILTER_REQUEST' : {
            return {
                ...state,
                taskCard: taskCard.sort(byField('statusTask')),
                processStatus: payload,
            }
        }
        default:
            return state;
    }}


export default appReducers
