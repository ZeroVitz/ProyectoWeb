$(window).load(function(){
	
	var item = $("#simpleCart_quantity").text();
	var total = item * 190;
    $("#precio").text(total+".00");
    var total2 = total + 150;
    $("#last_price").text(total2+".00");
}); 