// JavaScript Document


$(function(){
	var $putao=$('.putao');
	var $hide=$('.hide');
	var $bgimg=$('.bgimg');
	var $hide_more=$('.hide_more');
	var $more=$('.more');
	var $baijiu=$('.baijiu');
	var $hide1=$('.hide1');
	$putao.on('click',function(){
		
		$hide.toggle();
		
	})
	$more.on('click',function(){
		$hide_more.toggle()
	})
	$baijiu.on('click',function(){
		$hide1.toggle();
		
	})
})