var intervalID;

function encrypt() {
	clearTimeout(intervalID);
	intervalID = setInterval(function() {
		var oldText = document.getElementById("title").innerHTML;
		for (var i = 13; i <  oldText.length; i+=26) {
			var char = String.fromCharCode(65 + Math.round((25 * Math.random())));
			oldText = oldText.substring(0, i) + char + oldText.substring(i+1);
		}
		document.getElementById("title").innerHTML=oldText;
	},60);	
}

function decrypt() {
	clearInterval(intervalID);
	var goal = "[&nbsp;&nbsp;T&nbsp;&nbsp;|&nbsp;&nbsp;H&nbsp;&nbsp;|&nbsp;&nbsp;E&nbsp;&nbsp;|&nbsp;&nbsp;H&nbsp;&nbsp;|&nbsp;&nbsp;A&nbsp;&nbsp;|&nbsp;&nbsp;S&nbsp;&nbsp;|&nbsp;&nbsp;H&nbsp;&nbsp;]";
	var oldText = document.getElementById("title").innerHTML;
	if (oldText != goal) {
		var loopNum = 0;
		function loop() {
			if (loopNum > 32) {
				document.getElementById("title").innerHTML=goal;
				return;	
			}
			intervalID = setTimeout(function() {
				for (var i = 13; i < oldText.length; i+=26) {
					if (oldText.charAt(i) != goal.charAt(i)) {
						var char = String.fromCharCode(65 + Math.round((25 * Math.random())));
						oldText = oldText.substring(0, i) + char + oldText.substring(i+1);				
					}
					document.getElementById("title").innerHTML=oldText;	
				}
				if (oldText != goal) {
					loopNum++;
					loop();
				}
				else {
					loopNum = 0;
				}
			},60);
		}
		loop();
	}
}