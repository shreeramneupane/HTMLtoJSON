// JavaScript Document
var jsonArray = [];
var root = document.body.children[0];
createJSON(root,jsonArray);
function createJSON(recentTag,recentJSON){
	var i=0;
	var json = {};
	json.tag = recentTag.tagName;
	if(recentTag.hasAttribute)
	while(i<recentTag.attributes.length){
		json[recentTag.attributes[i].name] = recentTag.attributes[i].value;
		i++;
		}
	try{
		if(recentTag.childNodes[0].data.trim().length>0)
			json.content = recentTag.childNodes[0].data.trim();
		}
		catch(e){}
	if(recentTag.children)
		json.children = [];
	recentJSON[recentJSON.length] = json;
	for(var j=0;j<recentTag.children.length;j++){
		createJSON(recentTag.children[j],recentJSON[recentJSON.length-1].children);
		}
	}
console.log(jsonArray);
