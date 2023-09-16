// a <p> with red text that says “Hey I’m red!”

const p1= document.createElement('p');

//to add content in p

p1.textContent="Hey I am red";

// to add style in p
// p1.setAttribute('style','color:red');

p1.style.color='red';

// an <h3> with blue text that says “I’m a blue h3!”

const h= document.createElement('h3');

//to add content in p

h.textContent="Hey I am blue h3";

// to add style in p
// p1.setAttribute('style','color:red');

h.style.color='blue';

let container=document.querySelector('#container');

container.appendChild(p1);
container.appendChild(h);

// a <div> with a black border and pink background color with the 
// following elements inside of it:
const div1=document.createElement('div');

div1.classList.add('inside_div');
div1.setAttribute('style','border:1px solid black; background-color:pink');


// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement,

const heading=document.createElement('h1');
heading.textContent="I am in a div";

const para=document.createElement('p');
para.textContent="Me too!";

div1.append(heading);
div1.append(para);


container.append(div1);



