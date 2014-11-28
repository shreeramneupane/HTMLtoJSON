// JavaScript Document
/*var e = document.getElementById("news");
e.className="newClass";
e.style.backgroundColor="red";
console.log(e);*/
/*var el = document.getElementById("news");
addClass(el,"cde");
//removeClass(el,"abc");
function addClass(el,cl){
	el1 = el.className;
	var classes = el1.split(" ");
	for(i=0; i<classes.length;i++){
		if(classes[i]==cl){
			break;
			}
		if(i==classes.length-1){				
				el.className += " "+cl;;
				}
		}
		
	}
function removeClass(el,cl){
	el1 = el.className;
	var classes = el1.split(" ");
	var a="";
	for(i=0; i<classes.length;i++){
		if(classes[i]!=cl){
				if(a.length==0){
					a += classes[i];
					}
					else{
						a += " "+classes[i];
						}
			 }
	}
	el.className = a;
}*/
/*var a = document.getElementsByClassName("social");
console.log(a);
for(var i=0; i<a.length; i++){
	a[i].style.border="2px solid #000000";	
	}*/
/*var a = document.getElementsByTagName("p");
for(var i=0; i<a.length;i++){
	a[i].style.backgroundColor="yellow";
	}*/
/*function abc(t){
	var a = document.getElementById("news"); 
	var el = document.createElement("p");
		el.innerHTML="text from JS";
		el.className="new-p";
		el.style.color="red";
	a.appendChild(el);
	console.log(t);
}*/
/*var a = document.getElementsByClassName("big-menu");
for(var i=0; i<a.length;i++){
		var el = a[i];
		el.onclick = function(){
		console.log(el);
		}
	}*/
//self invoking function
/*(function abc(a){
	console.log(a);
	})(10);*/
/*var a = document.getElementById("local");
console.log(a);
var dom ={
	tag:'div',
	content:'',
	children:[
				{
					tag:'div',
					content:'abc'
				},
				{
					tag:'input'	
				},
				{
					tag:'button'
				}
			]
	};*/