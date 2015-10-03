var sign = 10, listflag = false;
var width = (document.all ? document.getElementsByTagName("html")[0].offsetWidth : window.innerWidth) / 100;
var height = (document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight) / 100;


window.onload = function(){
	$('#header').css('height', $('#header').css('height', $('#header_image').height().toString() + 'px'));
	$('.page').css('height', $('.image').height().toString() + 'px');
	$('.title').css('height', (7 * width).toString() + 'px');
	$('.title').css('font-size', $('.title').height().toString() + 'px');
	$('.title').css('line-height', $('.title').height().toString() + 'px');
	$('.title').css('top', (0.058 * $('.page').height()).toString() + 'px');
	
	$('#page2_word').css('top',(0.164 * $('.page').height()).toString() + 'px');
	$('#page2_word').css('font-size',(2.84 * width).toString() + 'px');
	$('#page2_word').css('line-height',(1.8 * parseInt($('#page2_word').css('font-size'))).toString() + 'px');
	
	$('#page3_word').css('top',(0.245 * $('.page').height()).toString() + 'px');
	$('#page3_word').css('font-size',(2.84 * width).toString() + 'px');
	$('#page3_word').css('line-height',(1.8 * parseInt($('#page2_word').css('font-size'))).toString() + 'px');
	
	$('.subtitle').css('font-size',(3.83 * width).toString() + 'px');
	$('.subtitle').css('left',(53 * width).toString() + 'px');
	
	$('.compare_words').css('font-size',(2.84 * width).toString() + 'px');
	$('.compare_words').css('line-height',(1.8 * parseInt($('.compare_words').css('font-size'))).toString() + 'px');
	$('.compare_words').css('left',(53 * width).toString() + 'px');
}


header_button.ontouchend = function(){
	if(!listflag){
		this.src = 'img/close.png';
		listflag = true;
	}
	else{
		this.src = 'img/menu.png';
		listflag = false;
	}
}

//header_button.onmouseup = header_button.ontouchend;



function set_height(){
	if(navigator.userAgent.indexOf("iPad") == -1)
	{
		$("#page0").attr('height', $('#page1').width() * 800 / 2020);
	}
	else
	{		
		$("#page1").attr('height', $('#page1').width() * 665 / 1024);
		$("#page2").attr('height', $('#page2').width() * 665 / 1024);
		$("#page3").attr('height', $('#page3').width() * 665 / 1024);
		$("#page4").attr('height', $('#page4').width() * 665 / 1024);
		$("#page5").attr('height', $('#page5').width() * 665 / 1024);
		$("#page6").attr('height', $('#page6').width() * 665 / 1024);
		$("#page7").attr('height', $('#page7').width() * 665 / 1024);
	}  
}

window.onscroll = function () {
	
	if(getScrollTop() > $('#page1').offset().top - 20 && getScrollTop() < $('#page1').offset().top + 600){
		document.getElementById('page1').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page2').offset().top - 20 && getScrollTop() < $('#page2').offset().top + 600){
		document.getElementById('page2').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page3').offset().top - 20 && getScrollTop() < $('#page3').offset().top + 600){
		document.getElementById('page3').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page4').offset().top - 20 && getScrollTop() < $('#page4').offset().top + 600){
		document.getElementById('page4').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page5').offset().top - 20 && getScrollTop() < $('#page5').offset().top + 600){
		document.getElementById('page5').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page6').offset().top - 20 && getScrollTop() < $('#page6').offset().top + 600){
		document.getElementById('page6').contentWindow.anime();
	}	
	if(getScrollTop() > $('#page7').offset().top - 20 && getScrollTop() < $('#page7').offset().top + 600){
		document.getElementById('page7').contentWindow.anime();
	}	
	
	
	var scrtop = document.documentElement.scrollTop||document.body.scrollTop;
	var height = document.documentElement.clientHeight||document.body.clientHeight;
	if (scrtop > sign){
		if(scrtop - sign > 20){
			$('#header').css('height', '0px');
		}
		sign = scrtop;  
		
		    
	}
	else if(scrtop < sign){
		if(scrtop - sign < -10){
			$('#header').css('height', '83px');
		}
		sign = scrtop;
	}
	
}



function getScrollTop(){
    var scrollTop = 0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }
    else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}



function getClientHeight(){
    var clientHeight=0;
    if(document.body.clientHeight&&document.documentElement.clientHeight){
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;        
    }
    else{
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;    
    }
    return clientHeight;
}


function getScrollHeight(){
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}

set_height();