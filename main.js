//Como declarar arrays? O id a ser referido para innerHTML é declarationOfArrays

var fruits = ["Maçã", "Laranja", "Manga"];
document.getElementById("declarationOfArrays").innerHTML = fruits;

//Como obter a primeira fruta da lista

var firstFruit = fruits[0];
document.getElementById("accessFirstElement").innerHTML = firstFruit;

//Como obter a segunda fruta da lista

var secondFruit = fruits[1];
document.getElementById("accessSecondElement").innerHTML = secondFruit;

//Como obter a terceira fruta da lista

var thirdFruit = fruits[2];
document.getElementById("accessThirdElement").innerHTML = thirdFruit;

//Como obter o comprimento da lista

var lengthOfTheArray = fruits.length;
document.getElementById("display_length_of_array").innerHTML = lengthOfTheArray;

var arrayValue = "";
for (var i = 0; i < fruits.length; i++) {
	arrayValue += fruits[i] + "<br>";
}
document.getElementById("loopTheArray").innerHTML = arrayValue;

fruits.push("Limão");
document.getElementById("addElementAtTheEndOfArray").innerHTML = fruits;

fruits.push("Cereja");
document.getElementById("addMoreElementAtTheEndOfArray").innerHTML = fruits;

var alphabets = ["l", "a", "e", "j", "b", "g", "f", "h", "c", "d", "i", "k"];
document.getElementById("displayAlphabetsArray").innerHTML = alphabets;

alphabets.sort();
document.getElementById("displaySortAlphabetArray").innerHTML = alphabets;

alphabets.reverse();
document.getElementById("displayReverseArray").innerHTML = alphabets;

var numbers = [45, 4, 9, 16, 25];
document.getElementById("displayNumberArray").innerHTML = numbers;

var maximumNumber = Math.max.apply(Math, numbers);
document.getElementById("displayMaximumNumber").innerHTML = maximumNumber;

var minimumNumber = Math.min.apply(Math, numbers);
document.getElementById("displayMinimumNumber").innerHTML = minimumNumber;

