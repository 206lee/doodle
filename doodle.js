const section = document.querySelector('section');

const panel0 = document.createElement('div');
const panel1 = document.createElement('div');
const panel2 = document.createElement('div');

const panel2n1 = document.createElement('div');
const panel2n1n1 = document.createElement('div');
const panel2n1n2 = document.createElement('div');
const panel2n1n1n1 = document.createElement('div');
const panel2n1n1n2 = document.createElement('div');
const img1 = document.createElement('img');

const panel2n2 = document.createElement('div');
const panel2n3 = document.createElement('div');

const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');

const panel2n3n1 = document.createElement('div');
const panel2n3n2 = document.createElement('div');
const panel2n3n3 = document.createElement('div');

const panel2n4 = document.createElement('div');
const p1 = document.createElement('p');

function doodle(){
    section.appendChild(panel0);

    panel1.setAttribute('class', 'section-container');
    section.querySelector('div').appendChild(panel1);
    panel2.setAttribute('class', 'section-main minwidth470');
    section.querySelector('div').querySelector('div').appendChild(panel2);

    panel2n1.setAttribute('class', 'section-top');
    panel2n1.setAttribute('id', 'sectiontop');
    section.querySelector('div').querySelector('div').querySelector('div').appendChild(panel2n1);
    panel2n1n1.setAttribute('class', "section-profile top5");
    document.querySelector('#sectiontop').appendChild(panel2n1n1);
    panel2n1n2.setAttribute('class', "around right10 top5 cursor");
    panel2n1n2.setAttribute('id', "morhoriz");
    document.querySelector('#sectiontop').appendChild(panel2n1n2);
    img1.setAttribute('src', 'img/morehoriz.png');
    img1.setAttribute('width', '30px');
    document.querySelector('#morhoriz').appendChild(img1);
    
    panel2n2.setAttribute('class', 'section-body minwidth470'); // IMGE
    section.querySelector('div').querySelector('div').querySelector('div').appendChild(panel2n2);

    panel2n3.setAttribute('class', 'cursor'); //icon
    panel2n3.setAttribute('id', 'icons');
    section.querySelector('div').querySelector('div').querySelector('div').appendChild(panel2n3);
    // panel2n3n1.setAttribute('class', 'cursor') //icon
    // panel2n3n1.setAttribute('id', 'icon1')
    // panel2n3n2.setAttribute('class', 'cursor') //icon
    // panel2n3n2.setAttribute('id', 'icon2')
    // panel2n3n3.setAttribute('class', 'cursor') //icon
    // panel2n3n3.setAttribute('id', 'icon3')

    img2.setAttribute('src', 'img/favorite.png');
    img2.setAttribute('class', 'cursor left10');
    img2.setAttribute('width', '25px');
    document.querySelector('#icons').appendChild(img2);
    img3.setAttribute('src', 'img/chatbubble.png');
    img3.setAttribute('width', '25px');
    img3.setAttribute('class', 'cursor left10');
    document.querySelector('#icons').appendChild(img3);
    img4.setAttribute('src', 'img/send.png');
    img4.setAttribute('width', '25px');
    img4.setAttribute('class', 'cursor left10');
    document.querySelector('#icons').appendChild(img4);

    panel2n4.setAttribute('class', 'left10 bottom10'); //Content
    panel2n4.setAttribute('id', 'doodleex');
    section.querySelector('div').querySelector('div').querySelector('div').appendChild(panel2n4);


    let doodletext = document.createTextNode(localStorage.getItem('doodle'))
    p1.appendChild(doodletext)
    document.querySelector('#doodleex').append(p1);


}

doodle();