let hello = document.querySelector('h1');
hello.style.color = "red";
hello.innerText = "Lab7 Assignment";

let linebreak = document.createElement("hr");
document.body.appendChild(linebreak);

let task = document.createElement("h2");
task.innerText = "Task";
task.style.color = "red";
document.body.appendChild(task);

let para1 = document.createElement("p");
para1.innerText = "In this task you have to reproduce this HTML page as is using ";
let only = document.createElement("b");
only.innerText = "only";
para1.appendChild(only);
let content = document.createTextNode(" JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:");
para1.appendChild(content);
document.body.appendChild(para1);

let list = document.createElement("ul");
let even1 = document.createElement("li");
let odd1 = document.createElement("li");
let even2 = document.createElement("li");
let odd2 = document.createElement("li");
let even3 = document.createElement("li");
let odd3 = document.createElement("li");

even1.classList.add("even");
odd1.classList.add("odd");
even2.classList.add("even");
odd2.classList.add("odd");
even3.classList.add("even");
odd3.classList.add("odd");

list.appendChild(even1);
list.appendChild(odd1);
list.appendChild(even2);
list.appendChild(odd2);
list.appendChild(even3);
list.appendChild(odd3);
document.body.appendChild(list);

let points = document.createElement("b");
points.innerText = "(5 points)";
let sem = document.createTextNode(";");

even1.innerText = "find elements in the DOM ";
even1.appendChild(points);
even1.appendChild(sem);

let points2 = document.createElement("b");
points2.innerText = "(5 points)";
let sem2 = document.createTextNode(";");

odd1.innerText = "create/add/remove elements ";
odd1.appendChild(points2);
odd1.appendChild(sem2);

let points3 = document.createElement("b");
points3.innerText = "(5 points)";
let sem3 = document.createTextNode(";");

even2.innerText = "change content of the elements ";
even2.appendChild(points3);
even2.appendChild(sem3);

let points4 = document.createElement("b");
points4.innerText = "(5 points)";
let sem4 = document.createTextNode(";");

odd2.innerText = "change styles of the elements ";
odd2.appendChild(points4);
odd2.appendChild(sem4);

let points5 = document.createElement("b");
points5.innerText = "(5 points)";
let sem5 = document.createTextNode(";");

even3.innerText = "change attributes of the elements ";
even3.appendChild(points5);
even3.appendChild(sem5);

let points6 = document.createElement("b");
points6.innerText = "(5 points)";
let sem6 = document.createTextNode(";");

odd3.innerText = "change classes of the elements ";
odd3.appendChild(points6);
odd3.appendChild(sem6);

let linebreak2 = document.createElement("hr");
document.body.appendChild(linebreak2);

let sub = document.createElement("h2");
sub.innerText = "Submission";
sub.style.color = "red";
document.body.appendChild(sub);

let inst = document.createElement("p");
inst.innerText = "To submit your work, follow these instructions:";
document.body.appendChild(inst);

let list2 = document.createElement("ul");
let even11 = document.createElement("li");
let odd11 = document.createElement("li");
let even22 = document.createElement("li");
let odd22 = document.createElement("li");
let even33 = document.createElement("li");
let odd33 = document.createElement("li");
let even44 = document.createElement("li");

even11.classList.add("even");
odd11.classList.add("odd");
even22.classList.add("even");
odd22.classList.add("odd");
even33.classList.add("even");
odd33.classList.add("odd");
even44.classList.add("even");

list2.appendChild(even11);
list2.appendChild(odd11);
list2.appendChild(even22);
list2.appendChild(odd22);
list2.appendChild(even33);
list2.appendChild(odd33);
list2.appendChild(even44);
document.body.appendChild(list2);

even11.innerText = "Create a new repository on Github, named ";
let word = document.createElement("b");
word.innerText = "lab7 (1 point)";
let dot = document.createTextNode(".");
even11.appendChild(word);
even11.appendChild(dot)

odd11.innerText = "Clone this repository to your local machine and work inside it. ";

even22.innerText = "Create a new HTML file, called ";
let html = document.createElement("b");
html.innerText = "index.html";
even22.appendChild(html);
let phrase = document.createTextNode(", which has only one <h1> tag with \"Hello, World!\" message ");
even22.appendChild(phrase);
let word2 = document.createElement("b");
word2.innerText = "(1 point)";
let dot2 = document.createTextNode(".");
even22.appendChild(word2);
even22.appendChild(dot2);


odd22.innerText = "Create a new JavaScript file, called ";
let js = document.createElement("b");
js.innerText = "main.js";
odd22.appendChild(js);
let phrase2 = document.createTextNode(", which must contain your program (assignment) described above ");
odd22.appendChild(phrase2);
let word3 = document.createElement("b");
word3.innerText = "(1 point)";
let dot3 = document.createTextNode(".");
odd22.appendChild(word3);
odd22.appendChild(dot3);

even33.innerText = "Link this ";
let js2 = document.createElement("b");
js2.innerText = "main.js ";
even33.appendChild(js2);
let phrase3 = document.createTextNode("file to your ");
even33.appendChild(phrase3);
let html2 = document.createElement("b");
html2.innerText = "index.html ";
even33.appendChild(html2);
let phrase4 = document.createTextNode("file (Note: place your script at the end of the ");
even33.appendChild(phrase4);
let word4 = document.createElement("b");
word4.innerText = "body ";
let dot4 = document.createTextNode("section).");
even33.appendChild(word4);
even33.appendChild(dot4);

odd33.innerText = "Write a JavaScript program in ";
let js3 = document.createElement("b");
js3.innerText = "main.js ";
odd33.appendChild(js3);
let phrase5 = document.createTextNode("to make your ");
odd33.appendChild(phrase5);
let html3 = document.createElement("b");
html3.innerText = "index.html ";
let phrase6 = document.createTextNode("look identical to this HTML file ");
odd33.appendChild(html3);
odd33.appendChild(phrase6);
let points7 = document.createElement("b");
points7.innerText = "(5 points)";
odd33.appendChild(points7);
let dot5 = document.createTextNode(".");
odd33.appendChild(dot5);

even44.innerText = "After you finish your work, submit it to the Github ";
let points8 = document.createElement("b");
points8.innerText = "(2 points)";
even44.appendChild(points8);
let dot6 = document.createTextNode(".");
even44.appendChild(dot6);

let gr = document.getElementsByClassName("even");
for (var i = 0; i < gr.length; i++) {
	gr[i].style.color = "green";
}

let pr = document.getElementsByClassName("odd");
for (var i = 0; i < pr.length; i++) {
	pr[i].style.color = "purple";	
}

let linebreak3 = document.createElement("hr");
document.body.appendChild(linebreak3);

