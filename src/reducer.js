//what does the data layer look like before the app starts up....so we are gonna start with user not being logged in
export const initialState = {
    user: null
}

//this is where we can push information into the data layer....here we are pushing the user as we login
export const actionTypes =  {
    SET_USER: "SET_USER"
}


//reducer's job is to listen to any dispatched actions
const reducer = (state, action) => {
    console.log(action)


    switch (action.type) {
        //but lets say if we do know the dispatched action, lets say its SET_USER, its going to returnwhat the what the new data layer should look like
        case actionTypes.SET_USER:
            return {
                //basically return what the state looked like and overwrite the user with whatever the user term you dispatched
                ...state,
                user: action.user
            }

        //if it don't know what dispatched action is, it just returns the intial whatever the state currently was
        default:
            return state
    }
}

export default reducer;