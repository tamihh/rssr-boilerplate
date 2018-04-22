import {
	GET_APPLICATION_STATUS
} from './action';

const initialState = {
	appStatus: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_APPLICATION_STATUS:
			return {
				...state, appStatus: action.payload.data
			}

		default:
			return state
	}
}