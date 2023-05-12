
let shareBtn=document.getElementById("share");
let instaPost=document.getElementById("insta-post");
let clsBtn=document.getElementById("cls-btn");
let shrTray=document.getElementsByClassName("share-tray");

shareBtn.addEventListener("click",function(){
	this.parentNode.style.display="none"
	console.log("fsg");
	shrTray[0].classList.toggle("active");

});

clsBtn.addEventListener("click",function(){
	let prnt=this.parentNode;
	prnt.classList.toggle("active");
	instaPost.style.display="block";
})

