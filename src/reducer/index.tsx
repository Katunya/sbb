import {taskCard} from "../core/data";
import {byField} from "../utils";
import {Reducer} from "redux";

const initialState = {
    field: 'type',
    statusTask: 'Все',
    closeType: 'all',
    taskCard: taskCard,
    type: 'Все',
};

const appReducers: Reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'FIELD_REQUEST' : {
            return {
                ...state,
                taskCard: [...state.taskCard.sort(byField(payload))],
                field: payload,
            }
        }
        case 'PROCESS_STATUS_REQUEST' : {
            return {
                ...state,
                taskCard:  payload === initialState.statusTask ? initialState.taskCard :  [...initialState.taskCard.filter((item: { statusTask: string; }) => item.statusTask === payload)],
                statusTask: payload,
            }
        }
        case 'CLOSE_REQUEST': {
            return {
                ...state,
                taskCard:  payload === 'all' ? initialState.taskCard  :  [...initialState.taskCard.filter((item: any) => item.statusTask === payload)],
                closeType: payload
            }
        }
        case 'TYPE_TASK_REQUEST': {
            return {
                ...state,
                taskCard:payload === 'Все'  ?  initialState.taskCard :  [...initialState.taskCard.filter((item: { type: string; }) => item.type === payload)],
                type: payload
            }
        }
        default:
            return state;
    }}


export default appReducers;
