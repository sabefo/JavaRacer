$(document).ready(function() {
	count1 = 0;
	count2 = 0;
	whoMoves();
	$("#button").on("click",function(){
		count1 = 0;
		count2 = 0;
		$("p").text(" ");
			var $selector1 = $("#jugador_1").find(".active");
			$selector1.removeClass("active");
			var $selector2 = $("#jugador_2").find(".active");
			$selector2.removeClass("active");
			$("#jugador_1 td:first-child").addClass("active");
			$("#jugador_2 td:first-child").addClass("active");
			whoMoves();
	});
});

var whoMoves = function(){
	var start = performance.now();
	$(document).on("keyup", function(e){
		if (count1 < 17 && count2 < 17) {
			console.log("entramos");
			a = e.which;
			if (a == 65) {
				var $selector1 = $("#jugador_1").find(".active");
				if(count1 < 17){
					$selector1.next("td").toggleClass("active");
					$selector1.toggleClass("active");
					count1++;
					console.log(count1);
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
	 		console.log("gano 1");
			$("#won").append("Ganó 1");
			$(document).unbind("keyup");
			var fin = performance.now() - start;
			$("#time").append(fin);
		} else {
			$("#won").append("Ganó 2");
			$(document).unbind("keyup");
			var fin = performance.now() - start;
			$("#time").append(fin);
		};
	});
};
