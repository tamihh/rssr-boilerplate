export const GET_APPLICATION_STATUS = 'application_status';

export const applicationStatus = () => async (dispatch, getState) => {

	dispatch({
		type: GET_APPLICATION_STATUS,
		payload: { status: loaded }
	})
}
