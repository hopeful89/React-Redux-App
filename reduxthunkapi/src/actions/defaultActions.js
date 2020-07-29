import axios from 'axios';

export const FETCH_TEMTEM_START = 'FETCH_TEMTEM_START';
export const FETCH_TEMTEM_SUCCESS = 'FETCH_TEMTEM_SUCESS';
export const FETCH_TEMTEM_FAILURE = 'FETCH_TEMTEM_FAILURE';

export const fetchTemtemStart = () => dispatch => {
    dispatch({type: FETCH_TEMTEM_START})
    console.log('temtem fetch has been called')
    axios.get('https://temtem-api.mael.tech/api/temtems')
    .then(res => {
        console.log('this is the temtem data from success', res.data)
        dispatch({type: FETCH_TEMTEM_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: FETCH_TEMTEM_FAILURE, payload: err.message})
    })
}

