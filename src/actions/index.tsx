
export const createAction = (action: string) => (payload = {}) => ({ type: action, payload });

export const FIELD_REQUEST = "FIELD_REQUEST";
export const fieldRequest = createAction(FIELD_REQUEST);

export const PROCESS_STATUS_REQUEST = "PROCESS_STATUS_REQUEST";
export const processStatusRequest = createAction(PROCESS_STATUS_REQUEST);
