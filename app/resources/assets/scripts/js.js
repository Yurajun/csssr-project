window.onload = function(){
	// var checkBoxs = document.getElementsByClassName('checkbox-label');
	// console.log(checkBoxs.length);
	// for(var lk = 0; lk < checkBoxs.length; lk++){
	// 	checkBoxs.onclick = onLabelClick;
	// 	console.log(checkBoxs);
	// }
var user = {0: "Комаров Юрий Николаевич",
						1: 1985,
						2: "г. Владимир",
						3: " Еще не приобрел",
						4: "yurajun@mail.ru",
						5: "26.10.2016"};

var inputText = document.querySelectorAll("input[type=text]");

for(var io = 0; io < inputText.length; io++){
	inputText[io].value = user[io];
};

    



}


