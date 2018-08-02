// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg','./imgs/1.jpeg','./imgs/2.jpeg','./imgs/3.jpeg','./imgs/4.jpeg','./imgs/5.jpeg'];
var currentIndex = 0;
var i =0;
var pic =document.getElementsByTagName("img");

// while(i==0){
// 	document.getElementsByTagName("img")[0].addEventListener("click",function(event){
// 	alert("Welcome to our slideshow!click on the pic to go to the next pic.")
// 	i++;
// })
// }

document.getElementsByTagName("img")[0].addEventListener("click",function(event){
	currentIndex++;
	pic[0].src=pictures[currentIndex];
	if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
})



// function showNextPicture() {
//    // increment current picture
//   // if currentIndex is too large, start from the beginning again
  

//   // YOUR TASK: Finish this function!
// }