var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
animal = animal.toUpperCase();

var replacedText = text.replace('Papugi', animal);
console.log(replacedText);

console.log(replacedText.length / 2);
var substrText = replacedText.substr(0, replacedText.length / 2);
console.log(substrText);

