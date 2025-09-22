//your JS code here. If required.
let level = document.getElementById("level");
let parent = level.parentNode;
let item= parent.children;
index = Array.from(item).indexOf(level);

 alert("The level of the element is: "+index);