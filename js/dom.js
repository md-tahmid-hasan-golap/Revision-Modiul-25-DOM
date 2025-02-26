const mainSection = document.getElementById("main_section");
// const section = document.createElement("section");
// section.innerHTML =  `
// <h1>My family </h1>
// <ol>
// <li>baba</li>
// <li>ma</li>
// <li>bon</li>
// </ol>

// `
// mainSection.appendChild(section)

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "my fevrate places"
section.appendChild(h1)

const ul = document.createElement("ul");
const li2 = document.createElement('li');
li2.innerText = "sopnoPury"
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = "paharPur"
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = "coxBazar"
ul.appendChild(li4)

section.appendChild(ul)
mainSection.appendChild(section)