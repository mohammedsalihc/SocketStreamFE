import { LOGOUT_USER, SET_USER } from "../actions/AuthActions"

const initial_state = {
    user: null,
    token:null
}

const authReducer = (state = initial_state, action) => {
    switch (action?.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
              };
        case LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
}

export default authReducer