// var moment = require('moment');
// var * as bd = require('./localstorage');
import * as bd from './localstorage'

var initialState = bd.initialState;


export default function myReducer(state=initialState, action){


	if(action.type==="GET_REC_BYDATE"){

 		var state = bd.getRecByDate(action.payload)
		return [
			...state
		]
	}

	return state;
}
