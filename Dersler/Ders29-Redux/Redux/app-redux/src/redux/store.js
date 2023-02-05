import { legacy_createStore as createStore} from 'redux' 
import {muzReducer} from './reducer'

export const store = createStore(muzReducer)