// JavaScript Document


$(function(){
	var $putao=$('.putao');
	var $hide=$('.hide');
	var $bgimg=$('.bgimg');
	var $hide_more=$('.hide_more');
	var $more=$('.more')	
	$putao.on('click',function(){
		
		$hide.toggle();
		
	})
	$more.on('click',function(){
		$hide_more.toggle()
	})
})