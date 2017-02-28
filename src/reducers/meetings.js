var moment = require('moment');


var initialState = [
	{date:"12январь", time0:"12:12", time1:"13:00" ,text:"Первая по умолчанию встреча "},
	{date:"12январь", time0:"14:12", time1:"15:00" , text:"Вторая по умолчанию встреча "}
]

export default function myReducer(state=initialState, action){
	if(action.type==="ADD_TEXT"){
		return [
			...state,
			action.text
		]
	}

	return state;
}




//сериализуем его
var serialObj = JSON.stringify(initialState);

//Добавляем или изменяем значение:
localStorage.setItem('Meetings', serialObj);


var returnObj = JSON.parse(localStorage.getItem("Meetings")) //спарсим его обратно объект
console.log("=======:",returnObj);
console.log(" moment().format(); = ", moment().format());

// window.DDD = moment

moment.locale('ru')
var exapmle = moment('1.12.2017 13:00').format('LLLL')
console.log(" exapmle = ", exapmle);
