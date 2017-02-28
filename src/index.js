import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';


const store = createStore(reducers);
store.subscribe(function(){
//	console.log(" === ", store.getState());
});

// store.dispatch({type:"ADD_TEXT", text:"aass===22"});


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));
