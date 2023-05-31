// creo l'array della lista della spesa
let list = [
    'uova',
    'guanciale',
    'pecorino',
    'pepe',
    'pasta',
    'acqua'
];

// recupero l'elemento del dom che deve contenere gli ingredienti
const list_dom = document.getElementById('list');

// ciclo l'array
let i=0;
while(i<list.length){
    let elem = document.createElement('li');
    elem.innerText = list[i];
    list_dom.append(elem);
    i++;
}