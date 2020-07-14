//сгенерированно заново
const dataURL = "https://api.jsonbin.io/b/5f0b6dc7343d624b07847cb1";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData	
	$.getJSON(
		dataURL,
		function(data) {

		handleData(data)
		});
}


function handleData(data) {
//Обработать нажатие кнопки
//Принять данные JSON
const $data = $(data);
var stringified = JSON.stringify(data);

//получить значения полей
 const var1 = $("input[name=var1]").val();
 const var2 = $("input[name=var2]").val();
 const var3 = $("input[name=var3]").val();
 const var4 = $("input[name=var4]").val();
 const var5 = $("input[name=var5]").val();
 const var6 = $("input[name=var6]").val();
 const speech = $("input[name=speach]").val();

//заменить все переменные на значения
stringified = stringified.replace(/{var1}/g, var1);
stringified = stringified.replace(/{var2}/g, var2);
stringified = stringified.replace(/{var3}/g, var3);
stringified = stringified.replace(/{var4}/g, var4);
stringified = stringified.replace(/{var5}/g, var5);
stringified = stringified.replace(/{var6}/g, var6);
stringified = stringified.replace("{speach}", speech);

//Сделать обратно JSON и вывести как текст
let JSONtext = JSON.parse(stringified);
let textForView = JSONtext.text[ 0 ] + "<br>";

	    for (let i=1; i < JSONtext.text.length; i++) {
			textForView = textForView + JSONtext.text[ i ] + "<br>";
		}
// Назначить блоку Result необходимое значение

	$("#result").html(textForView);
}




function init() {
	$("#button-fetch").click(handleButton);
}



$(document).ready(init);
