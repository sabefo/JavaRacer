$(document).ready(function() {
	count1 = 0;
	count2 = 0;
	// a = event.which;
	if (count1 < 17 && count2 < 17) {
		whoMoves();
	} else if (count1 > count2) {
		$("p").append("gano 1");
	} else {
		$("p").append("gano 2");
	};
});

var whoMoves = function(){
	$(document).on("keyup", function(e){
		if (count1 < 17 && count2 < 17) {
			a = e.which;
			if (a == 65) {
				var $selector1 = $("#jugador_1").find(".active");
				if(count1 < 17){
					$selector1.next("td").toggleClass("active");
					$selector1.toggleClass("active");
					count1++;
				}
			} else if (a == 76) {
				var $selector1 = $("#jugador_2").find(".active");
				if(count2 < 17){
					$selector1.next("td").toggleClass("active");
					$selector1.toggleClass("active");
					count2++;
				}
			}
	 	} else if (count1 > count2) {
			$("p").append("Ganó 1");
			$(document).unbind("keyup")
		} else {
			$("p").append("Ganó 2");
			$(document).unbind("keyup")
		};
	});
};
