export const SET_USER = 'SET_USER'
export const LOGOUT_USER = "LOGOUT_USER"

export const setUser = (user,token)=>({
    type:SET_USER,
    payload:{
        user,
        token
    }
})

export const logoutUser = () => {
    localStorage.removeItem('token');
    return {
      type: LOGOUT_USER,
    };
  };