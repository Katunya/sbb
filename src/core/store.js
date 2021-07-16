import { createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import appReducers from "../reducer";

export const store = createStore(appReducers,  composeWithDevTools());
