const INITIAL_STATE = {
    isSignedIn: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SING_IN':
            return {...state,isSignedIn:true}
        case 'SIGN_OUT':
            return {...state,isSignedIn:false}
        default:
            return state;
    }

}