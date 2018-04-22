import { combineReducers } from 'redux'
import applicationReducer from '../components/containers/App/store/reducer'

export default combineReducers({
	application: applicationReducer
})