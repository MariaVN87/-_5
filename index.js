import { dataInfo } from "./data.js";
const data = JSON.parse(dataInfo);
console.log(data);

const divEl = document.querySelector('.content');

data.forEach(({ id, name, gender, country, image }) => {
    const parfumeEl = document.createElement('div');
    parfumeEl.classList.add('parfume');
    divEl.appendChild(parfumeEl);
    parfumeEl.style.width = '350px';
    parfumeEl.style.height = '250px'
    parfumeEl.style.display = 'inline-block';
    parfumeEl.style.marginRight = '15px';
    parfumeEl.style.textAlign = 'center';

    const img = document.createElement('img');
    img.src = image;
    img.width = 180;
    img.height = 200;
    parfumeEl.appendChild(img);

    const nameEl = document.createElement('p');
    nameEl.classList.add('name');
    nameEl.textContent = `бренд: ${name}`;
    nameEl.style.fontSize = '24px'
    parfumeEl.appendChild(nameEl);

    const genderEl = document.createElement('p');
    genderEl.classList.add('gender');
    genderEl.textContent = `пол: ${gender}`;
    genderEl.style.fontSize = '24px';
    parfumeEl.appendChild(genderEl);

    const countryEl = document.createElement('p');
    countryEl.classList.add('country');
    countryEl.textContent = `страна: ${country}`;
    countryEl.style.fontSize = '24px';
    parfumeEl.appendChild(countryEl);

    const idEl = document.createElement('p');
    idEl.id = id;
    idEl.textContent = `Артикул: ${id}`;
    idEl.style.fontSize = '24px';
    parfumeEl.appendChild(idEl);

});