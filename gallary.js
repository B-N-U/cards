let names = ['Amar','Ali','Amr','Omar'];
let ages = ['22 Years old','21 Years old','20 Years old','19 Years old'];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';

function element(name, ageValue)
{
    //elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    //content
    title.textContent = name;
    age.textContent = ageValue;
    img.src = '1.jpg';

    //style
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = '2px';
    card.style.display = 'inline-block';

    img.style.width = '100%';

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    container.appendChild(card);
}

for(let i = 0; i < names.length; i++)
{
    element(names[i], ages[i]);
}
