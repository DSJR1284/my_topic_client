export const commentssReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
        return action.payload
        default: 
        return state
    }
}