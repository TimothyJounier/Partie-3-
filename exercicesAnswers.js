//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  let response = sentence.length;
  return response;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let response = sentence.replace("e"," ");
  return response;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let response = firstSentence + secondSentence;
  return response;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let response = sentence.charAt(4);
  return response;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let response = sentence.substring(0,9);
  return response;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let response = sentence.toUpperCase();
  return response;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let response = sentence.toLowerCase();
  return response;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let response = sentence.trim();
  return response;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  return true;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  let response = fileName.split('.').pop();
  return response;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  let count = 0;
  let pos = sentence.indexOf(' ');

  while ( pos != -1){
    count++;
    pos = sentence.indexOf(' ',pos + 1);
  }
  return count;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
let response = sentence.split('').reverse().join('');
  return response;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  if(sentence.indexOf('La Manu') !=-1);
  return true;
  }
  

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  return numbersArray.map(Math.abs,numbersArray);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round( Math.PI * radius * radius);
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  return Math.floor( Math.hypot(a,b));
}
