/*
// 1. pravljenje elemenata

const novielement = document.createElement('h1');

// 2. dodavanje atributa i svojstva elemenata

novielement.textContent = 'Programiranje u javaScriptu';
novielement.style.color = 'teal';
novielement.style.fontFamily = 'Courier New';
novielement.style.textAlign = 'center';

// 3. dodavane u DOM

//document.body.append(novielement); // ubacuje ga kao poslednji element

document.body.prepend(novielement);

const kutija1 = document.querySelector('.prva');
kutija1.prepend(novielement);

const kutija2 = document.querySelector('.druga');
document.body.insertBefore(novielement, kutija2);

const kutija = document.querySelector('.kutija');
console.log(kutija);
*/
// 4. dodaj novu numerisanu listu u html koja ima 3 elementa a koriscenjem crate element dodaj cetvrtu stavku na tu listu na pocetak i kraj liste

const novielement = document.createElement('p');
novielement.textContent = '4';
document.body.prepend(novielement);

