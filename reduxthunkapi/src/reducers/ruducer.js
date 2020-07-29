import { FETCH_TEMTEM_START, FETCH_TEMTEM_FAILURE, FETCH_TEMTEM_SUCCESS} from '../actions/defaultActions'

const initialState = {
    name: [],
    isFetching: false,
    error: ''
}

export const defaultReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TEMTEM_START: 
            console.log('test test test', action)
            //TODO: update state to reflect temtem for display remember to spread state use action.payload
            //
            return state;
        case FETCH_TEMTEM_SUCCESS:
            console.log('this is the success being called')
            return state;
        case FETCH_TEMTEM_FAILURE:
            console.log('this is a failure being called')
            return state
        default: return state
    }
}