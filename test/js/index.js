var width = (document.all ? document.getElementsByTagName("html")[0].offsetWidth : window.innerWidth) / 100;
var height = (document.all ? document.getElementsByTagName("html")[0].offsetHeight : window.innerHeight) / 100;
var top_now;


window.onload = function(){
	set_header();
	$('#footer').css('height', $('#footer_image').height().toString() + 'px');
	set_video();
	set_title();
	set_suspend();
	set_change_language();
	set_blank();
	hide_cover();
}

function set_title(){
	$('.title').css('height', (7 * width).toString() + 'px');
	$('.title').css('font-size', $('.title').height().toString() + 'px');
	$('.title').css('line-height', $('.title').height().toString() + 'px');
	$('.title').css('top', (0.058 * $('.page').height()).toString() + 'px');
	set_content();
}

function set_video(){
	$('#video').attr('height', width * 390 / 6);
	$('#video').css('top', (50 * height - $('#video').attr('height') / 2).toString() + 'px');
}

function set_content(){
	var page2_word_top_rate = 0.164;
	var font_size = 2.84;
	var line_height_rate = 1.8; 
	
	var page3_word_top_rate = 0.245;
	
	$('.page').css('height', $('.image').height().toString() + 'px');
	$('#page2_word').css('top',(page2_word_top_rate * $('.page').height()).toString() + 'px');
	$('.normal_words').css('font-size',(font_size * width).toString() + 'px');
	$('.normal_words').css('line-height',(line_height_rate * parseInt($('#page2_word').css('font-size'))).toString() + 'px');
	
	$('#page3_word').css('top',(page3_word_top_rate * $('.page').height()).toString() + 'px');
	$('#page3_word').css('font-size',(font_size * width).toString() + 'px');
	$('#page3_word').css('line-height',(line_height_rate * parseInt($('#page2_word').css('font-size'))).toString() + 'px');
	
	$('#page6_word').css('top',(0.224 * $('.page').height()).toString() + 'px');
	$('#page7_word').css('top',(0.224 * $('.page').height()).toString() + 'px');
	$('#page8_word').css('top',(0.170 * $('.page').height()).toString() + 'px');
	$('#page8_hint').css('top',(0.254 * $('.page').height()).toString() + 'px');
	
	$('.subtitle').css('font-size',(3.83 * width).toString() + 'px');
	$('.subtitle').css('left',(53 * width).toString() + 'px');
	
	$('.compare_words').css('font-size',(2.84 * width).toString() + 'px');
	$('.compare_words').css('line-height',(line_height_rate * parseInt($('.compare_words').css('font-size'))).toString() + 'px');
	$('.compare_words').css('left',(53 * width).toString() + 'px');
	
	$('.division_words').css('font-size',(2.84 * width).toString() + 'px');
	$('.division_words').css('line-height',(line_height_rate * parseInt($('.compare_words').css('font-size'))).toString() + 'px');
	
	$('.page8_words').css('font-size',(2.84 * width).toString() + 'px');
	$('#page8_hint').css('font-size',(2.44 * width).toString() + 'px');
	
	top_now = $('#page1').height() + $('#page2').height() + $('#page3').height() + $('#page4').height() + $('#page5').height() + $('#page6').height() + $('#page7').height() + $('#page8').height();
}

function set_blank(){
	$('#blank').css('height', $('#footer_image').height().toString() + 'px');
	$('#blank').css('top', top_now.toString() + 'px');
}

function set_suspend(){
	var footer_fontsize_rate = 0.34;
	var button_height_rate = 0.6;
	var button_width_broaden_rate = 1.4;
	
	
	$('.footer_word').css('font-size',($('#footer').height() * footer_fontsize_rate).toString() + 'px');
	$('#go_jd').css('height', ($('#footer').height() * button_height_rate));
	$('#go_jd').css('width', ($('#go_jd').width() * button_width_broaden_rate));
	$('#go_jd').css('line-height', ($('#go_jd').height()).toString() + 'px');
	$('#buybuybuy').css('left', (10 * width).toString() + 'px');
	$('#go_jd').css('right', (10 * width  - $('#go_jd').width() *  1 / 7).toString() + 'px');
	$('#go_jd').css('border-radius', ($('#go_jd').height() / 2).toString() + 'px');
	$('.footer_word').css('bottom', (($('#footer').height() - $('.footer_word').height()) / 2).toString() + 'px');
	$('#go_jd').css('bottom', (($('#footer').height() - $('#go_jd').height()) / 2).toString() + 'px');
}

$('#watch_video').click(function(){
	$('#video').css('display', 'block');
	show_cover();
});

function stop_video(){
	window.open(document.all.video.src,'video','');
	$('#video').css('display', 'none');
}
