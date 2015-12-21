$(document).ready(function(){
    $("button").click(function(){
    	var val1 = parseInt($("li").slice(-2).html(),10);
		var val2 = parseInt($("li").slice(-1).html(),10);
		var finalVal = val1 + val2;
        $("ul").append("<li>" + finalVal +"</li>");

    });
});

