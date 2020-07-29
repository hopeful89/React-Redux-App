import { FETCH_TEMTEM_START, FETCH_TEMTEM_FAILURE, FETCH_TEMTEM_SUCCESS} from '../actions/defaultActions'
//TODO: verify state coming from api and reflect a better initial state for temtem
const initialState = {
    name: [],
    isFetching: false,
    error: ''
}

export const defaultReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TEMTEM_START: 
            console.log('test test test', action)
            //TODO: 
            // need to update state with isFetching as true and pass to UI with an update during fetch
            return {
                ...state, 
                isFetching: true,
            };//removes button during fetch
        case FETCH_TEMTEM_SUCCESS:
            console.log('this is the success being called')
            //TODO: update state with new data from api call look for this information in mapToProps
            return {
                ...state,
                isFetching: false,
            };
        case FETCH_TEMTEM_FAILURE:
            //TODO: update state with error message from action.payload and display on screen
            console.log('this is a failure being called')
            return state
        default: return state
    }
}