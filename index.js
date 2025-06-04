// images = new Array["RANDY/tester.jpg","RANDY/tester2.jpg","RANDY/worker.jpg"];
//var randomim = Math.floor(Math.random() * images.length);
//document.getElementById("im").src = images[randomim];


    

function get(color) {
    var color = new Array["white","blue","grey"];
//var images = new Array["RANDY/tester.jpg","RANDY/tester2.jpg","RANDY/worker.jpg"];
var randomim = Math.floor(Math.random() * color.length);
 document.getElementsByClassName("logo").style.background = color[randomim];

}
get()
var color = new Array["white","blue","grey"];
//var images = new Array["RANDY/tester.jpg","RANDY/tester2.jpg","RANDY/worker.jpg"];
var randomim = Math.floor(Math.random() * color.length);
 document.getElementsByClassName("logo").style.background = color[randomim];


function image() {
    var t = new Array [" <h2>SERVICES</h2> <li>Building/civil engineering construction.</li> <li>Project management.</li><li>Building inspection</li><li>Non Destructive Testing(NDT).</li>",
    " Building inspections are crucial for ensuring safety, structural integrity and compliance with building codes, proctecting occupants and the surounding enviroment. they identify potential hazards and ensure structures are safe to occupy. preventing costly repairs and ensure and legal issues. these inspections help buyers get value for their money.avoid unexpected repair expences allow sellers to address issues that would lower propery value of turndown"];

    var a =  Math.floor(Math.random() * t.length);
 a = document.querySelector("ads")
   p = a.innerHTML = t[0];
 

setInterval(image,1000)

}
setInterval(image(),1000)
a.appendChild(t[0])
m = 1
if (m=1) {
    a.innerHTML = t[0]
}
console.log(a) 

if(screen.width <= 699){
    document.URL = 'mobile.html';
    
}
