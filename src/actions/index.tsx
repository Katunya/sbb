
export const createAction = (action: string) => (payload = {}) => ({ type: action, payload });

export const FIELD_REQUEST = "FIELD_REQUEST";
export const fieldRequest = createAction(FIELD_REQUEST);

export const PROCESS_STATUS_REQUEST = "PROCESS_STATUS_REQUEST";
export const processStatusRequest = createAction(PROCESS_STATUS_REQUEST);

export const CLOSE_REQUEST = "CLOSE_REQUEST";
export const closeStatusRequest = createAction(CLOSE_REQUEST);

export const TYPE_TASK_REQUEST = "CLOSE_REQUEST";
export const typeTaskStatusRequest = createAction(TYPE_TASK_REQUEST);
