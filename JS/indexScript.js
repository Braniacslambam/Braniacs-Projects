$(document).ready( function() {
$('#Balls_Image').hover(function () {
		$(this).html("<a href='https://github.com/Braniacslambam/OpenTKSharp-Bouncing-Balls/tree/master'><img src='./Images/Complete.png' class='Inner_Image' style='height:70%; width:70%' ></img></a><figcaption>Bouncing Balls C# Project Using OpenTK.</figcaption>");
		$('#Pong_Image').html('<a href="https://github.com/Braniacslambam/Pong-Game-Using-Pygame"><img src="./Images/Pong.PNG" class="Inner_Image"></a></img><figcaption>Pong Game Using Pygame</figcaption>');
}, function() {
	$(this).html('<a href="https://github.com/Braniacslambam/OpenTKSharp-Bouncing-Balls/tree/master"><img src="./Images/Balls.png" class="Inner_Image"></a></img><figcaption>Bouncing Balls C# Project Using OpenTK.</figcaption>');
});
$('#Pong_Image').hover(function () {
		$(this).html("<a href='https://github.com/Braniacslambam/Pong-Game-Using-Pygame'><img src='./Images/Complete1.png' class='Inner_Image' style='height:70%; width:70%' ></img></a><figcaption>Pong Game Using Pygame</figcaption>");
		$('#Balls_Image').html('<a href="https://github.com/Braniacslambam/OpenTKSharp-Bouncing-Balls/tree/master"><img src="./Images/Balls.png" class="Inner_Image"></img></a><figcaption>Bouncing Balls C# Project Using OpenTK.</figcaption>');
}, function() {
	$(this).html('<a href="https://github.com/Braniacslambam/Pong-Game-Using-Pygame"><img src="./Images/Pong.PNG" class="Inner_Image"></img><a/><figcaption>Pong Game Using Pygame</figcaption>');
});
});