function orient()
{
	if (window.orientation == 0 || window.orientation == 180) {
		$(function () {
			var window_height = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight ;
			var width = window_height/40;
			$("#set_font_size").css("font-size",width);
			var heightA = window_height * 0.25; 
			$("#partA").css('height', heightA);			
			var heightB = window_height * 0.35; 	 
			$("#partB").css('height', heightB);
			$("#partC").css('top', heightA);
			var heightC = window_height * 0.65; 
			$("#partC").css('height', heightC);
			var heightD = window_height * 0.1;
			$("#partD").css('top', heightA + heightC);
			$("#partD").css('height', heightD);
			var height = window_height * 0.1; 
			$("#temprature_div").css('height', height);
			height = $("#PM_evaluation").width()/2;
			$("#PM_evaluation").css('height', height);
			$("#PM_evaluation").css('border-radius', height/2);
			height = $("#temprature_evaluation").width()/2;
			$("#temprature_evaluation").css('height', height);
			$("#temprature_evaluation").css('border-radius', height/2);
			height = $("#humidity_evaluation").width()/2;
			$("#humidity_evaluation").css('height', height);
			$("#humidity_evaluation").css('border-radius', height/2);
			height = window_height * 0.15; 
			$("#PM_div").css('height', height);
			$("#partB").css('top',height);
			height = window_height * 0.1; 
			$("#humidity_div").css('height', height); 		
			var heightD = $("#partC").width()/8; 
			$("#partD").css('height', heightD);	
			draw_partA();
			draw_partB();
			draw_partC();
		});
	}
	else if(window.orientation == 90 || window.orientation == -90)
	{
		$(function () {
			$(".shadow").css("display","none");
			$("#call_manage").css("border","0px");
			$("#share_img2").css("width","50%");
			$("#share_img2").css("position","relative");
			$("#share_img2").css("left","25%");
			$("#share_prompt").css("width","40%");
			$("#share1").css("width","7.5%");
			$("#share1").css("left","27.5%");
			$("#share2").css("width","7.5%");
			$("#share2").css("left","40%");
			$("#share3").css("width","7.5%");
			$("#share3").css("left","52.5%");
			$("#share4").css("width","7.5%");
			$("#share4").css("left","65%");
			$("#share5").css("width","50%");
			$("#share5").css("left","25%");
			var width = $("#partA").width();
			$("#set_font_size").css("font-size",width/25);
			var heightA = $("#partA").width()/3; 
			$("#partA").css('height', heightA);	
			$("#partB").css('top', -heightA);
			$("#partC").css('top', heightA);
			$("#partC").css("position","");
			var heightB = $("#partB").width(); 
			var heightD = $("#partD").width()/6;
			var window_height = document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight ;
			$("#partB").css('height', window_height - heightD);
			var heightC = $("#partC").width()*1.2; 
			$("#partC").css('height', window_height - heightA);
			var height = $("#temprature_div").width(); 
			$("#temprature_div").css('height', height);
			height = $("#PM_evaluation").width()/2;
			$("#PM_evaluation").css('height', height);
			$("#PM_label").html('PM2.5');
			$("#PM_evaluation").css('border-radius', height/2);
			height = $("#temprature_evaluation").width()/2;
			$("#temprature_evaluation").css('height', height);
			$("#temprature_evaluation").css('border-radius', height/2);
			height = $("#humidity_div").width(); 
			$("#humidity_div").css('height', height);
			height = $("#humidity_evaluation").width()/2;
			$("#humidity_evaluation").css('height', height);
			$("#humidity_evaluation").css('border-radius', height/2);
			height = $("#PM_div").width(); 
			$("#PM_div").css('height', height);		
			var heightD = $("#partC").width()/8; 
			$("#partD").css('height', heightD);	
			draw_partA();
			draw_partB();
			draw_partC();
		});	
	}
}

$(function(){
    orient();
});


$(window).bind( 'orientationchange', function(e){
    orient();
	window.location.href=window.location.href;
});