// var point = new Object();
// point.a = 10;
// point.b = "Apple";

// alert("pat: " + point.a + point.b);


// var myDate = new Date();

// alert("My Date : " + myDate);

// var car = Array("drift",4,"speed");
// alert(car[1]);

// var obj = new String("Me car");
// obj.speed="120km";
// alert(obj + obj.speed);

// var func = new Function("a","b","return a + b");
// var result = func(5,5);

// alert(func);

function Car(mark,type,model,speed,fuel,amount,cons,color,weight){
	this.mark = mark;
	this.type = type;
	this.model = model;
	this.speed = speed;
	this.fuel = fuel;
	this.amount = amount;
	this.cons = cons;
	this.color = color;
	this.weight = weight;

	this.getInfo = function() {
		document.write('Марка: ' + this.mark + "</br>");
		document.write('Тип: ' + this.type + "</br>");
		document.write('Модель: ' + this.model + "</br>");
		document.write('Скорость: ' + this.speed + "</br>");
		document.write('Горючее: ' + this.fuel + "</br>");
		document.write('Обьем двигателя: ' + this.amount + "</br>");
		document.write('Расход на 100км: ' + this.cons + "</br>");
		document.write('Цвет: ' + this.color + "</br>" );
		document.write('Вес: ' + this.weight + "</br>");

		document.write('Максимальная: ' + Math.round(this.amount / this.cons * 100) + 'km');
	}
	
getInfo();
	
}
Car();

var masCar =[Mercedes,Ford,Renault,Opel,Fiat];

var Mercedes = new Car("Mersedes ","Sedan ","Benz ","300km ","Benzin ", 50, 11,"black ","2500kg ");

var Ford = new Car("Ford ","Sedan ","Fiesta ","260km ","Benzin ", 40, 10,"red ","1800kg ");

var Renault = new Car("Renault ","HatchBack ","Vito ","230km ","Dizel ", 40, 8,"white ","1500kg ");

var Opel = new Car("Opel ","Sedan ","Zefira ","250km ","Dizel ",35, 9,"blue ","1400kg ");

var Fiat = new Car("Fiat ","Sedan ","Doblo ","220km ","Gaz ",45, 6,"black ","1300kg ");






function func (){
	var poisk = prompt("Введите марку автомобиля : Mercedes, Ford, Renault, Opel, Fiat" );

 	switch(poisk){
		case "Mercedes":
		Mercedes.getInfo();
		break;
		case "Renault":
		Renault.getInfo();
		break;
		case "Ford":
		Ford.getInfo();
		break;
		case "Opel":
		Opel.getInfo();
		break;
		case "Fiat":
		Fiat.getInfo();
		break;
		
	}
}
func();

function colorCar(){
	var colorPoisk = prompt("Введите цвет машины: ");
	for( var i = 0; i<masCar.length; i++ ){
		if (masCar[i]==colorPoisk) {
			alert();
		}
	}
}
colorCar();
