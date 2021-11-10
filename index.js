

for(var i=0; i<7; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
              var buttonhtml=this.innerHTML;
              handleclick(buttonhtml);
              animation(buttonhtml);
    });
    
      
}
document.addEventListener("keypress", function(event){
     handleclick(event.key);
     animation(event.key);
})

function handleclick(key)
{
	switch(key)
	{
		case "w":
		      var audio= new Audio("tom-1.mp3");
	          audio.play();
	        break;
	    case "a":
		      var audio= new Audio("tom-2.mp3");
	          audio.play();
	        break;
	    case "s":
		      var audio= new Audio("tom-3.mp3");
	          audio.play();
	        break;
	    case "d":
		      var audio= new Audio("tom-4.mp3");
	          audio.play();
	        break;
	    case "j":
		      var audio= new Audio("crash.mp3");
	          audio.play();
	        break;
	    case "k":
		      var audio= new Audio("kick-bass.mp3");
	          audio.play();
	        break;
	    case "l":
		      var audio= new Audio("snare.mp3");
	          audio.play();
	        break;
	   
	    

	}

}
	function animation(key)
	{
		var active=document.querySelector("."+key);
		active.classList.add("pressed");
		setTimeout(function(){
			active.classList.remove("pressed");
		}, 100);
	}